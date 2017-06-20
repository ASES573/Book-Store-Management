var express = require('express');
var sql = require('mssql');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var bookRouter = express.Router();
var bookService = require('')
var bookController = require('../controllers/bookController')(null);
bookRouter.use(bookController.middleware);
bookRouter.route('/').get(bookController.getIndex);
bookRouter.route('/:id').get(bookController.getById);
module.exports = bookRouter;