import { Model, STRING, UUID, Deferrable, DataTypes } from 'sequelize'
import sequelize from './_conn'

export class user extends Model {
  public id: number | undefined
  public username: string | undefined
  public password: string | undefined
  public role: string | undefined
  public active: number | undefined
  public createdAt: Date | undefined
  public updatedAt: Date | undefined
}

user.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    active: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.TIME,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.TIME,
      field: 'updated_at'
    }
  },
  { sequelize, modelName: 'user', freezeTableName: true, timestamps: true }
)
