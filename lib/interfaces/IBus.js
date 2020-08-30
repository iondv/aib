class IBus {
  /**
   * @param {ISignal} signal
   * @returns {Promise}
   */
  handle(signal) {
    return this._handle(signal);
  }

  /**
   * @param {String} code
   * @param {String} sender
   * @param {String} thread
   * @param {Number} [timeout]
   * @returns {Promise}
   */
  wait(code, sender, thread, timeout) {
    return this._wait(code, sender, thread, timeout);
  }

  /**
   * @param {IAgent} agent
   * @param {ISignal} trigger
   * @returns {Promise}
   */
  register(agent, trigger) {
    return this._register(agent, trigger);
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  eject(id) {
    return this._eject(id);
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  status(id) {
    return this._status(id);
  }

  /**
   * @param {String} id
   * @param {{}} data
   * @returns {Promise}
   */
  setStatus(id, data) {
    return this._setStatus(id, data);
  }

  /**
   * @returns {undefined}
   */
  serve() {
    return this._serve();
  }

  /**
   * @returns {undefined}
   */
  stop() {
    return this._stop();
  }
}

module.exports = IBus;
