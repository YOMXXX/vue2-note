const mongoose = require('mongoose');
const addItemSchemas = require('../schemas/index.js');
const addItem = mongoose.model('list', addItemSchemas);

module.exports = addItem;
