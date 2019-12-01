import { recognizedEntity } from "../sqlz/models/_index";
import { Op } from 'sequelize'

export async function PublicFigure(timeFrame: { start: string, end: string }, entities: { ids: Array<number> }): Promise<any> {
  try {
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
  } catch (err) {
    console.log(err)
  }

}

export async function UpdatePublicFigure(data: { id: number, name: string, displayName: string, displayPicture: string }): Promise<any> {
  try {
    await recognizedEntity.update<recognizedEntity>(
      data,
      {
        where: { id: data.id }
      }
    )

    return { status: "success" }
  } catch (err) {
    console.log(err)
    return { status: "failed" }
  }

}

export async function AddPublicFigure(data: { name: string, displayName: string, displayPicture: string }): Promise<any> {
  try {
    const entitiesData = await recognizedEntity.create<recognizedEntity>(
      data,
    )

    return { status: "success" }
  } catch (err) {
    console.log(data)
    return { status: "failed" }
  }

}


