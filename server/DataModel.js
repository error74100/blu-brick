const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const DataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
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

DataSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('DataModel', DataSchema);
