import { user } from '../sqlz/models/user'
import bcrypt from "bcryptjs"


export async function GetAccount(): Promise<any> {
  try {
    const userData = await user
      .findAll<user>({
        attributes: [
          'id',
          'username',
          'role',
        ],
        where: {
          active: 1
        }
      })

    return userData
  } catch (err) {
    console.log(err)
    return []
  }
}

async function GetOneAccount(id: number): Promise<any> {
  try {
    const userData = await user
      .findOne<user>({
        attributes: [
          'id',
          'username',
          'role',
        ],
        where: {
          id: id
        }
      })

    return userData
  } catch (err) {
    console.log(err)
    return []
  }
}

export async function CreateAccount(username: string, password: string, role: string): Promise<any> {
  try {
    const pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const data: any = {
      username: username,
      password: pass,
      role: role,
    }

    const create = await user.create<user>(data)
    console.log(create)
    return create
  } catch (err) {
    console.log(err)
    return []
  }
}

// FIXME update problem, masih wajib semua column
export async function UpdateAccount(id: number, username: string, password: string, role: string): Promise<any> {
  try {
    const pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const data: any = {
      username: username,
      password: pass,
      role: role,
    }

    await user.update<user>(data,
      {
        where: { id: id }
      })

    const upd = await GetOneAccount(id)

    return upd
  } catch (err) {
    console.log(err)
    return []
  }
}

export async function DeleteAccount(id: number): Promise<any> {
  try {
    const data: any = {
      active: 0,
    }

    await user.update<user>(data,
      {
        where: { id: id }
      })

    const upd = await GetOneAccount(id)

    return upd
  } catch (err) {
    console.log(err)
    return []
  }
}
