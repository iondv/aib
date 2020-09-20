const IBus = require('../interfaces/IBus');
const IonError = require('core/IonError');
const uuid = require('uuid');

class AiBus extends IBus {
  /**
   * @param {{}} options
   * @param {IQueue} options.queue
   * @param {Repository} options.storage
   * @param {Number} [options.timeout]
   */
  constructor(options) {
    super();
    if (!options || !options.queue || !options.storage)
      throw new IonError('Invalid options');

    this.live = false;
    this.queue = options.queue;
    this.storage = options.storage;
    this.defaultTimeout = options.timeout || 10000;
    this.events = {};
    this.handleOnce = {};
  }

  /**
   * @param {ISignal} signal
   * @returns {Promise}
   */
  _handle(signal) {
    signal.thread = signal.thread || uuid.v1();
    return this.queue.enqueue(signal);
  }

  /**
   * @param {String} code
   * @param {String} sender
   * @param {String} thread
   * @param {String} id
   * @param {Function} handler
   */
  _addEvent(code, sender, thread, id, handler) {
    sender = sender || '';
    this.events[code] = this.events[code] || {};
    this.events[code][thread] = this.events[code][thread] || {};
    this.events[code][thread][sender] = this.events[code][thread][sender] || {};
    if (!this.events[code][thread][sender][id])
      this.events[code][thread][sender][id] = handler;
  }

  /**
   * @param {String} code
   * @param {String} sender
   * @param {String} thread
   * @param {Number} [timeout]
   * @returns {Promise}
   */
  _wait(code, sender, thread, timeout) {
    return new Promise((resolve, reject) => {
      const handler = function(signal) {
        return resolve(signal);
      };
      const timeOver = function() {
        return reject(new IonError(`Timeout for ${code} ${sender} ${thread} is over`));
      };
      const id = `wait-${uuid.v1()}`;
      if (code && thread)
        this._addEvent(code, sender, thread, id, handler);
      else
        this.handleOnce[id] = handler;

      setTimeout(timeOver, timeout || this.defaultTimeout);
    });
  }

  /**
   * @param {IAgent} agent
   * @param {ISignal} trigger
   * @returns {Promise}
   */
  async _register(agent, trigger) {
    const handler = agent.construct(this);
    if (typeof handler !== 'function')
      throw new IonError('No handler');

    const agentData = await this.storage.get(agent.id);
    if (!agentData)
      await this.storage.set(agent.id, {});

    if (trigger) {
      const {
        code, thread, sender
      } = trigger;
      this._addEvent(code, sender, thread, agent.id, handler);
    } else {
      this.handleOnce[agent.id] = handler;
    }
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  async _eject(id) {
    await this.storage.set(id, {});
    delete this.handleOnce[id];
    Object.values(this.events).forEach((code) => {
      Object.values(code).forEach((thread) => {
        Object.values(thread).forEach((sender) => {
          if (Object.keys(sender).includes(id))
            delete sender[id];
        });
      });
    });
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  async _status(id) {
    const agentData = await this.storage.get(id);
    if (agentData)
      return agentData.status;

    throw new IonError('No agent');
  }

  /**
   * @param {String} id
   * @param {{}} data
   * @returns {Promise}
   */
  async _setStatus(id, data) {
    let agentData = await this.storage.get(id);
    agentData = agentData || {};
    agentData.status = data;
    return this.storage.set(id, agentData);
  }

  /**
   * @param {ISignal} signal
   */
  _onSignal(signal) {
    if (Object.keys(this.handleOnce).length) {
      Object.values(this.handleOnce).forEach((handler) => {
        handler(signal);
      });
      this.handleOnce = {};
    }
    if (this.events[signal.code] && this.events[signal.code][signal.thread]) {
      const sender = signal.sender || '';
      if (this.events[signal.code][signal.thread][sender])
        Object.values(this.events[signal.code][signal.thread][sender]).forEach(handler => handler(signal));
    }
  }

  /**
   * @returns {undefined}
   */
  _serve() {
    if (this.live)
      return;

    this.live = true;
    const worker = async () => {
      if (!this.live)
        return;

      const signal = await this.queue.dequeue();
      if (signal)
        this._onSignal(signal);

      setImmediate(worker);
    };
    worker();
  }

  /**
   * @returns {undefined}
   */
  _stop() {
    this.live = false;
  }
}

module.exports = AiBus;
