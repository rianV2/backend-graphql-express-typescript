import { Sequelize } from 'sequelize'
import "../../lib/env"

const config = require('../../../config/config.json')
const dbConfig = config[`${process.env.NODE_ENV}`]["db"]

const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

export default sequelize
