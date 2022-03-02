/*
 * TODO: Implement user access commands
 * - get user by userName
 * - authorize user
 */
let MovieDB;
let usersData;
import dot from "dotenv";
dot.config();
import bcrypt from "bcrypt";

export default class UsersDB {
  static async injectDB(client) {
    if (MovieDB) {
      return;
    }
    try {
      MovieDB = await client.db(process.env.MONGO_MR);
      usersData = await MovieDB.collection("users");
    } catch (e) {
      console.error(`Unable to connect: ${e}`);
    }
  }

  static async compareUserPass(userId) {
    let cursor;
    try {
      cursor = await usersData.find(
        { _id: userId },
        { projection: { password: 1 } }
      );
      //   const password = "";
      return cursor.toArray();
    } catch (e) {
      console.error(`internal error: ${e}`);
      return { isPass: false, message: "internal Error" };
    }
  }

  static async getUserById(userId) {
    let cursor;
    try {
      cursor = await usersData.find(
        { _id: userId },
        { projection: { password: 0 } }
      );
    } catch (e) {
      console.error(`internal error: ${e}`);
      return null;
    }
    return cursor.toArray();
  }

  static async addUser(userInfo) {
    let cursor;
    if (userInfo["_id"]) {
      try {
        let hashedPass = await bcrypt.hash(userInfo.password, 10);
        cursor = await usersData.insertOne({
          ...userInfo,
          password: hashedPass,
        });
        return { success: true, message: "User Added Successfully!!" };
      } catch (e) {
        if (String(e).includes("E11000")) {
          return {
            success: false,
            message: "A user with the given userName already exists.",
          };
        }
        // console.error(`Error occurred while adding new user, ${e}.`);
        return {
          success: false,
          message: "Some Error occured please Try again later!! " + e,
        };
      }
    } else {
      return { success: false, message: "Internal Error" };
    }
  }
}
