import { Sequelize } from 'sequelize'

const myConfig = require('../../config/config.json')

const config = myConfig["development"]
const sequelize = new Sequelize(
  config['database'],
  config['username'],
  config['password'],
  config
)

export default sequelize
