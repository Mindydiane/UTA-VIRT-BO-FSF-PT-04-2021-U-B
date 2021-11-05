const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    }
  },
  Mutation: {
    // addBook: (_, {input}) => {
    //   // code to add book 
    //   const addedBook = insert(input.title, input.author, input.pages);
    //   return addedBook;
    // }

    addBook: async (parent, args) => {
      const book = await Book.create(args)
      return Book;
    }
  }
};

module.exports = resolvers;
