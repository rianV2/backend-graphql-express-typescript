import { user } from '../sqlz/models/user'
import bcrypt from "bcryptjs"
import { sign } from "jsonwebtoken";
import "../lib/env"

const config = require('../../config/config.json')
const appConfig = config[`${process.env.NODE_ENV}`]["app"]
const JWTKEY = appConfig["jwt-key"]

export async function CheckLogin(username: string, password: string, res: any): Promise<any> {
  try {
    const userData: any = await user
      .findOne<user>({
        attributes: [
          'id',
          'password',
          'username',
          'role',
        ],
        where: {
          username: username,
          active: 1,
        }
      })

    let check: boolean = false
    check = bcrypt.compareSync(password, userData.password)
    // check = true
    if (!check) {
      return []
    } else {
      delete userData["password"]

      // TODO JWT not a clean code
      // secret key environment variable
      const accessToken = sign({ userId: userData.id }, JWTKEY, {
        expiresIn: "2h"
      })

      userData['auth'] = { token: accessToken, expire: "2h" }
      // console.log(userData)

      // res.cookie('access-token', accessToken, { expired: 60 * 60 * 2 })

      // till here

      return userData
    }


  } catch (err) {
    console.log(err)
  }

}
