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

export default router;
