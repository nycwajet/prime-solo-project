const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const employeeId = req.body.employeeId;
  const email = req.body.email;
  const address  = req.body.address;
  const addressline2 = req.body.addressline2;
  const city = req.body.city;
  const stateName = req.body.stateName;
  const zipCode = req.body.zipCode;
  const admin = req.body.admin;

  const queryText = 'INSERT INTO "user" (username, password, first_name,last_name, employee_id, email, address, address_line2, city, state, zip_code, admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id';
  pool.query(queryText, [username, password, firstName, lastName, employeeId, email, address, addressline2, city, stateName, zipCode, admin])
    .then(() => res.sendStatus(201))
    .catch((error) => {res.sendStatus(500);console.log('error in register.post', error)});
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
