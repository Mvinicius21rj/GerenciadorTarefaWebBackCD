const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.put('/:id/:done', TaskController.done);
router.get('/:filter/all/:macAdress', TaskController.readAll);
router.get('/:id', TaskController.readById);
router.delete('/:id', TaskController.delete);
router.get('/filter/late/:macAdress', TaskController.late);
router.get('/filter/today/:macAdress', TaskController.today);
router.get('/filter/week/:macAdress', TaskController.week);
router.get('/filter/month/:macAdress', TaskController.month);
router.get('/filter/year/:macAdress', TaskController.year);


module.exports = router;