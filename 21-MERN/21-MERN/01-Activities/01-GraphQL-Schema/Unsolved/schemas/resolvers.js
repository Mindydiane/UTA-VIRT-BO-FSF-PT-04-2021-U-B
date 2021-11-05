const User = require('../models');

const resolvers = {
  Query: {
   // get all users
   users: async () => {
       return User.find().select('-__v -password');    
   }   
  }
}

module.exports = resolvers;