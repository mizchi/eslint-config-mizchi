const yaml = require('js-yaml')
const fs = require('fs')
const rc = yaml.safeLoad(
  fs.readFileSync(__dirname + '/eslintrc.yml')
)
module.exports = rc
