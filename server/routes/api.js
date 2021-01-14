const express = require('express');
const router = express.Router();

const usedCarController = require('../controllers/usedCarController')

// respond with every vehicle currently in our database
router.get('/', 
    usedCarController.allVehicles,
    (req, res) => res.status(200).json(res.locals.all)
)

// exports the currently used routers
module.exports = router;