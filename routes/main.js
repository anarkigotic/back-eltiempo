const express = require('express');
const { getNews } = require('../controller/news');
const app = express();

app.get('/all',getNews)


module.exports = app