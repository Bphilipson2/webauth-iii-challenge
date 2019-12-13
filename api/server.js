const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/authRouter');
const usersRouter = require('../users/usersRouter');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send('You are now able to become.....')
})

module.exports = server; 