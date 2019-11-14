import { recognizedEntity } from "../sqlz/models/_index";
import { Op } from 'sequelize'

export async function PublicFigure(timeFrame: { start: string, end: string }, entities: { ids: Array<number> }): Promise<any> {
  const entitiesData = await recognizedEntity
    .findAll<recognizedEntity>({
      attributes: [
        'id',
        'name',
        ['display_name', 'displayName'],
        ['display_picture', 'displayPicture']
      ],
      where: {
        id: {
          [Op.in]: entities.ids
        },
        created_at: {
          [Op.gt]: timeFrame.start,
          [Op.lt]: timeFrame.end,
        }
      }
    })

  return entitiesData
}


