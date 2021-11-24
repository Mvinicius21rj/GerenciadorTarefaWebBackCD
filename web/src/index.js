  
const express = require('express');

const servidor = express();

servidor.use(express.json());

const TaskRouters = require('./routes/TaskRouter');

servidor.use('/task', TaskRouters);

servidor.listen(3000)