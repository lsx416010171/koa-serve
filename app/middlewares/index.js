const router = require('../router')
const exception = require('./exception')
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');
// const log = require('./log')

module.exports = [
  bodyparser(),
  cors(),
  // log,
  exception,
  router.routes(),
  router.allowedMethods(),
]