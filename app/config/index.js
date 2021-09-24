const base = require('./base')
const pro = require('./pro')
const dev = require('./dev')

const PATH = process.env.NODE_MODEL || 'dev'

const SERVETYPE = {
  dev,
  pro
}

module.exports = Object.assign(base,SERVETYPE[PATH])