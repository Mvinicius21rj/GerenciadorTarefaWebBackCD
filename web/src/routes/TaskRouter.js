const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.get('/:filter/all', TaskController.readAll);
router.get('/:id', TaskController.readById);
router.delete('/:id', TaskController.delete);



module.exports = router;