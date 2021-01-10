const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: { type: String, required: true },
    bucketName: { type: String, required: true },
    isDone: {type: Boolean, required: true},
    deleted: {type: Boolean, required: true}
});

module.exports = mongoose.model('List', listSchema);