const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model('DataModel', DataSchema);
