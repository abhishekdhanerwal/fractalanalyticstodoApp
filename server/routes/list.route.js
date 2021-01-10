const express = require('express');
const router = express.Router();

const listController = require('../controllers/list.controller');


router.post('/getAll', listController.getAll);
router.post('/save', listController.save);
router.post('/change', listController.change);


module.exports = router;