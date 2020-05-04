const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    pool.query('SELECT FROM "secret" ( first_name,last_name, employee_id, email, address, address_line2, city, state, zip_code ) WHERE id = $1;', [req.user.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error selecting user info:', error);
            res.sendStatus(500);
        });
});

module.exports = router;