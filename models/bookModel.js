import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
