const { Router } = require('express')
const client = require('../database/databaseclient.js')
const router = Router()
const checkJwt = require('../middleware/auth0.js')


//GET
router.get('/pruebas'/*, checkJwt*/, (req, res) => callback(res));

function callback(res) {
    client.query(('select * from pruebas'), (query_error, query_response) => {
        res.json(query_response.rows)
    });
}


module.exports = router;