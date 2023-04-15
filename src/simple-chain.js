const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  count: 0,
  arr: [],

  getLength() {
    return this.count
  },

  addLink(value) {
      this.arr.push(`( ${value} )`)
      this.count++
      return this
  },

  removeLink(position) {
    if (typeof position !== 'number'
    || position <= 0 
    || position > this.arr.length - 1) {
      this.arr = []
      this.count = 0
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(position - 1, 1)
    this.count--
    return this
  },

  reverseChain() {
    this.arr.reverse()
    return this
  },

  finishChain() {
    let result = this.arr.join('~~')
    this.arr = []
    this.count = 0

    return result
  }
};

module.exports = {
  chainMaker
};
