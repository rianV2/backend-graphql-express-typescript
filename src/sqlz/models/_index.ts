import { recognizedEntity } from './recognized.entity'

// association
// recognizedEntity - onlineMediaStream
// recognizedEntity.hasMany(onlineMediaStream, {
//   foreignKey: 'recognized_entity_id'
// })
// onlineMediaStream.belongsTo(recognizedEntity, {
//   foreignKey: 'recognized_entity_id'
// })

export {
  recognizedEntity,
}
