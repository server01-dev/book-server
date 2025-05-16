import express from 'express';
import Book from '../models/bookModel.js';


const router = express.Router();

router.post('/books', async (req, res) => {
  try {
    const { name, author, publishedYear } = req.body;

    if (!name || !author) {
      return res.status(400).json({ message: 'Name and author are required.' });
    }

    const newBook = new Book({ name, author, publishedYear });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add book', error: error.message });
  }
});

router.get("/getBooks", async (req, res)=>{
  try{
    const AllBooks = await Book.find();
    res.status(200).json(AllBooks);
  } catch (error){
    res.status(500).json({ message: 'Failed to get all books', error: error.message });
  }
})

router.delete("/deleteBook/:id", async (req, res)=>{
  const { id } = req.params;
   try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully', deletedBook });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
})

router.get('/search/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const books = await Book.find({
      name: { $regex: name, $options: 'i' } 
    });

    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

export default router;
