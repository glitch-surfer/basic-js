const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.direction = value
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    let koef = Math.ceil(message.length / key.length)
    key = key.repeat(koef).toUpperCase()
    let messageArr = []
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        messageArr.push(i)
      }
    }
    message = message.split(' ').join('').toUpperCase()

    let codeStart = 'A'.charCodeAt(0)
    let lettersCount = 26
    let result = []

    for (let i = 0; i < message.length; i++) {
    
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result.push(message[i])
      }
      else {
        let letterInx = message.charCodeAt(i) - codeStart
        let shift = key.charCodeAt(i) - codeStart

        result.push(String.fromCharCode( codeStart + (letterInx + shift) % lettersCount ))

      }
    }
    for (let i = 0; i < messageArr.length; i++) {
      result.splice(messageArr[i], 0 , ' ')
    }

    return this.direction ? result.join('') : result.reverse().join('')
  }
  decrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    let koef = Math.ceil(message.length / key.length)
    key = key.repeat(koef).toUpperCase()
    let messageArr = []
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        messageArr.push(i)
      }
    }
    message = message.split(' ').join('').toUpperCase()

    let codeStart = 'A'.charCodeAt(0)
    let lettersCount = 26
    let result = []

    for (let i = 0; i < message.length; ++i) {
      if (message[i] === ' ') {
        result.push(message[i])
      } 
      else if (message.charCodeAt(i) < 65 || (message.charCodeAt(i) > 90 && message.charCodeAt(i) < 97) || message.charCodeAt(i) > 122) {
        result.push(message[i])
      } 
      else {
        let letterInx = message.charCodeAt(i) - codeStart
        let shift = key.charCodeAt(i) - codeStart

        result.push(String.fromCharCode( codeStart + (letterInx - shift + lettersCount) % lettersCount ))

      }
      
    }
    for (let i = 0; i < messageArr.length; i++) {
      result.splice(messageArr[i], 0 , ' ')
    }
    return this.direction ? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
