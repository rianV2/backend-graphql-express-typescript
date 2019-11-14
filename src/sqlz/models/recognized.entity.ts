import { Model, STRING, DataTypes } from 'sequelize'
import sequelize from './_conn'

export class recognizedEntity extends Model {
  public id: number | undefined
  public name: string | undefined
  public displayName: string | undefined
  public displayPicture: string | undefined
  public entity_type: string | undefined
  public created_at: string | undefined
}

recognizedEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    displayName: {
      type: DataTypes.STRING,
      field: 'display_name',
    },
    displayPicture: {
      type: DataTypes.TEXT,
      field: 'display_picture',
    },
    entity_type: DataTypes.STRING,
    created_at: DataTypes.DATE,
  },
  { sequelize, modelName: 'recognized_entity', freezeTableName: true, timestamps: false }
)
