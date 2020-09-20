class IQueue {
  /**
   * @param {ISignal} signal
   * @returns {Promise}
   */
  enqueue(signal) {
    return this._enqueue(signal);
  }

  /**
   * @returns {Promise.<ISignal>}
   */
  dequeue() {
    return this._dequeue();
  }
}

module.exports = IQueue;
