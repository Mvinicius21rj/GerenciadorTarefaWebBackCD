const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.put('/:id/:done', TaskController.done);
router.get('/:filter/all/macadress', TaskController.readAll);
router.get('/:id', TaskController.readById);
router.delete('/:id', TaskController.delete);
router.get('/filter/late/:macadress', TaskController.late);
router.get('/filter/today/:macadress', TaskController.today);
router.get('/filter/week/:macadress', TaskController.week);
router.get('/filter/month/:macadress', TaskController.month);
router.get('/filter/year/:macadress', TaskController.year);


module.exports = router;