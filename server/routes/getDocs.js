const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/documents', rejectUnauthenticated, (req, res) => {
    pool.query('SELECT * FROM "documents"  WHERE user-id = $1;')
        .then(results => res.send(results.rows))
        console.log(results.rows)
        .catch(error => {
            console.log('Error selecting user info:', error);
            res.sendStatus(500);
        });
});



