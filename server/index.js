const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const DataModel = require('./DataModel');
const connectDB = require('./Database');
connectDB();

const app = express();
app.use(express.json({ extended: false, limit: '100mb' }));

//we need cors middleware here because frontend and backend run on different ports.
const cors = require('cors');
app.use(cors());

// news 목록.
app.get('/api/newsList', (req, res) => {
  const page = req.query.p || 0;
  const newsPerPage = 3;

  console.log(page);
  console.log(newsPerPage);

  DataModel.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// news 상세페이지.
app.get('/api/newsDetail', (req, res) => {
  const newsId = req.query.id;

  DataModel.find({ _id: newsId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

// news 삭제.
app.delete('/api/newsDelete/:id', (req, res) => {
  const newsId = req.params.id;

  DataModel.deleteOne({ _id: newsId }).then((result) => {
    res.json(result);
  });
});

// news 수정.
app.put('/api/newsUpdate/:id', async (req, res) => {
  const filter = { _id: req.params.id };
  const update = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
  };

  // `doc` is the document _after_ `update` was applied because of
  // `new: true`
  let doc = await DataModel.findOneAndUpdate(filter, update, {
    new: true,
  }).then((result) => {
    res.json(result);
  });
});

// news 생성.
app.post('/api/newsWrite', async (req, res) => {
  try {
    const { title, image, content, date } = req.body;
    const newData = new DataModel({ title, image, content, date });

    await newData.save();
    res.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.log('error log', error.message);
    res.status(500).send('Server error while saving data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});

/*
OPTIONAL: FOR DEPLOYMENT
//import path package
const path = require('path');
// Serve static files from the React app by using path package
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//on client CMD, "npm build"
//also remove "build" entry from client .gitignore
//also you'll need to enter .env connection string as an environment variable in your platform
//also make sure you are using relative paths in your react components for server.js routes
*/
