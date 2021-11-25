
const express = require('express');
const cors = require('cors');

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

const TaskRouters = require('./routes/TaskRouter');

servidor.use('/task', TaskRouters);

servidor.listen(3333)