require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/users', userController);
app.use('/posts', postController);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Server is working'});
});

async function start() {
  await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tynsb.mongodb.net/post-app?retryWrites=true&w=majority`);
}

start().catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});