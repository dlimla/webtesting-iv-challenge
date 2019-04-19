const express = require('express');

const people = require('../people/peopleModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'hello happy people!'})
})

module.exports = server;