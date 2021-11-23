const path = require('path')
const args = require('minimist')(process.argv)
const prettier = require('prettier');

const scene = args['scene']
const activity = args['activity']
if(!scene) {
  throw new Error('scene is needed')
}
if(!activity) {
  throw new Error('activity is needed')
}
const relativePath = `resources/images/activities/${activity}/${scene}`
const activitiesDir = path.resolve('../../MyProject/frontendserv/shared/', relativePath)

const options = {
  prettier: prettier,
  responsive: {
    width: scene === 'pc' ? 1920 : 750,
    viewportWidth: 1440
  },
}

const config = {
  targetPath: activitiesDir,
  relativePath,
  options
}

module.exports = config