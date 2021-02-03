const UserList = require('../models/User');
const bcrypt = require("bcrypt");

const userservice = {
  
  getList: async function () {
    try {
      
        const userlist = await UserList.query();
        return { status: 200, userlist };

    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Internal server error!" };
    }
  },

  createUser: async function (user) {
    try {

          //encrypt password
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(user.password, salt);

            
          await UserList.query().insert({
            userName: user.userName, 
            email: user.email,
            phone: user.phone,
            password: hash
        });

        return { status: 200, success: true, msg: 'Registration Successful!'};

    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Internal server error!" };
    }
  },

  updateUserInfo: async function (id, patchData) {
    try {

      await UserList.query().patch(patchData).where({id});
      return { status: 200,  msg: "Updated" };

    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Internal server error!" };
    }
  },

 


  removeUser: async function (id){
    try {
      await UserList.query().delete().where({id});
      return { status: 200,  msg: "User deleted!" };

    } catch (err) {
      return { status: 500, msg: "Internal server error!" };
    }
  }
};

module.exports = userservice;