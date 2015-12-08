'use strict'

var merge = require('deepmerge')
var exists = require('existential')

function isObject (arg) {
  return typeof arg === 'object' && arg !== null
}

function base (target, source) {
  if (!isObject(source)) return exists(source) ? source : target
  return merge(target, source)
}

var args = {
  1: function () {
    return arguments[0]
  },
  2: function () {
    return base(arguments[0], arguments[1])
  },
  3: function () {
    var args = Array.prototype.slice.call(arguments)
    var result = base(args.shift(), args.shift())
    while (args.length !== 0) result = base(args.shift(), result)
    return result
  }
}

module.exports = function () {
  return args[arguments.length].apply(null, arguments)
}
