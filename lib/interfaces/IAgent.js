class IAgent {
  /**
   * @returns {String}
   */
  get id() {
    return this._getId();
  }

  /**
   * @param {String} value
   */
  set id(value) {
    return this._setId(value);
  }

  /**
   * @param {IBus} bus
   * @returns {Function}
   */
  construct(bus) {
    return this._construct(bus);
  }
}

module.exports = IAgent;
