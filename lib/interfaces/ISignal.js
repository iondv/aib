class ISignal {
  /**
   * @returns {String}
   */
  get code() {
    return this._getCode();
  }

  /**
   * @param {String} value
   */
  set code(value) {
    return this._setCode(value);
  }

  /**
   * @returns {String}
   */
  get sender() {
    return this._getSender();
  }

  /**
   * @param {String} value
   */
  set sender(value) {
    return this._setSender(value);
  }

  /**
   * @returns {String}
   */
  get thread() {
    return this._getThread();
  }

  /**
   * @param {String} value
   */
  set thread(value) {
    return this._setThread(value);
  }

  /**
   * @returns {{}}
   */
  get data() {
    return this._getData();
  }

  /**
   * @param {{}} value
   */
  set data(value) {
    return this._setData(value);
  }
}

module.exports = ISignal;
