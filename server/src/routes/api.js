const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define GET endpoint to retrieve data
router.get('/data', dataController.getData);

// Define POST endpoint to add data
router.post('/data', dataController.addData);

module.exports = router;
