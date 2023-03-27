'use strict'

const { ObjectId } = require('bson')
let loginDetails

class LoginDetailsDAO {
  /**
   * 
   * @param {MongoClient} conn MongoClient connected to the mongoserver
   * @returns 
   * @description
   * Creates database and collection in the connected mongoserver.
   * 
   */
  static async injectDB(conn) {
    if (loginDetails) {
      return
    }
    try {
      loginDetails = await conn.db(process.env.LOGIN_DETAILS_NS).collection("login_details")
    } catch (e) {
      console.error(`Unable to establish collection handles in loginDetailsDAO: ${e}`)
    }
  }

  static async addLoginDetails(data) {
    let timestamp = (new Date()).getTime();
    let loginData = { ...data, timestamp }
    try {
      const results = await (await loginDetails.find(data)).toArray()
      if (results.length == 0) {
        await loginDetails.insertOne(loginData);
        return { info: "Contact details is successfully created." }
      } else {
        return { info: "Contact details is already exists." }
      }
    } catch (e) {
      throw e
    }
  }

  static async getLoginDetails() {
    const aggregatePipeline = [
      {
        $sort: {
          timestamp: -1
        }
      }
    ]
    try {
      const results = await (await loginDetails.aggregate(aggregatePipeline)).toArray();
      return results
    } catch (e) {
      return e;
    }
  }

  static async updateLoginDetailsByID(id, data) {
    let timestamp = (new Date()).getTime();
    try {
      await loginDetails.updateOne({ _id: ObjectId(id) }, { $set: { ...data, timestamp } })
      return { info: `Login detail is successfully updated for id ${id}.` }
    } catch (e) {
      return { info: `Id is not found.` }
    }
  }

  static async deleteLoginDetailsByID(id) {
    try {
      await loginDetails.deleteOne({ _id: ObjectId(id) })
      return { info: `Login detail is successfully deleted for id: ${id}.` }
    } catch (e) {
      return { info: `Id is not found.` }
    }
  }
}

/**
 * 
 * {
 * _id: <objectId>,
 * timestamp: <number>,
 * phone: <string>,
 * email: <email>
 * }
 *  
 */

module.exports = LoginDetailsDAO