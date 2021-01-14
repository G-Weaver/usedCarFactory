// grabbing query from usedCarModels
const db = require('../models/usedCarModels')

// object literal for use/export
const usedCarController = {};

// capture everything currently in vehicles
usedCarController.allVehicles = (req, res, next) => {

    // query string to select everything from vehicles table
    const getAllQuery = 'SELECT * FROM vehicles'

    // sending the query string to the database
    db.query(getAllQuery)
        // if everything is successful, capture the response
        .then(response => {
            console.log(response);
            next()
        })
        // if not, make me aware of any error
        .catch(err => {
            return next({
                log: `Database error`,
                status: 502,
                message: { err: `usedCarController.allVehicles, ${error.stack}` },
            })
        })
}

// exports the completed usedCarController object
// this object will be used in api.js
module.exports = usedCarController;