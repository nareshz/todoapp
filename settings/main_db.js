var mongoose = require('mongoose');
require('dotenv/config');

var mongoUrl;
mongoUrl=`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-usohh8h-shard-00-00.edxhl1z.mongodb.net:27017,ac-usohh8h-shard-00-01.edxhl1z.mongodb.net:27017,ac-usohh8h-shard-00-02.edxhl1z.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-1346dg-shard-0&authSource=admin&retryWrites=true&w=majority`

module.exports = mongoose.createConnection(mongoUrl, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true });