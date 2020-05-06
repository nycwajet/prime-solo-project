const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
   const userId= req.params.id;
    console.log('In Get request', userId);
    const queryText = `SELECT * FROM "documents" WHERE "userId" = $1;`;
    pool.query(queryText, [userId]).then((result) => {
            res.send(result.rows);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });

});

module.exports = router;
