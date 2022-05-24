const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect password or email address entered');
      }

      const correctPw = await user.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password or email address entered');
      }

      const token = signToken(user);

      return { token, user };
    },

    //edit user info if logged in
    updateUser: async (_, {username, email} , context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
            {_id: context.user._id},
            {$set: {username: username, email: email} },
            { new: true})
            .then (result => {
              console.log("This is the result", result)
          })
          .catch (err => {
              console.error(err)
          })   
        }
    throw new AuthenticationError('Please login to update an item!');
    },

    // Delete user if logged in
    deleteUser: async (_, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },  
},
};

module.exports = resolvers;
