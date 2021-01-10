const express = require('express');
const router = express.Router();

const bucketController = require('../controllers/bucket.controller');

router.post('/getAll', bucketController.getAll);
router.post('/save', bucketController.save);


module.exports = router;