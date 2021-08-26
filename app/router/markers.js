
const markersController = require('../controller/markers');
const express = require('express');
const router = express.Router();

router.get('/', markersController.getMarkers);
router.get('/:id', markersController.getMarkerData);


module.exports = router;