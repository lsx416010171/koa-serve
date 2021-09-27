const path = require('path')
const fs = require('fs')
const CONFIG = require('../config')

let controllerList = {}

const files = fs.readdirSync(__dirname)
for (const file of files) {
  if(!CONFIG.FILLERFILE.includes(file)){
    controllerList[file.replace('.js','')] = require(`./${file}`)

  }
}

module.exports = controllerList
