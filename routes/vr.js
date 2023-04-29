var express = require('express');
var router = express.Router();
const passport = require('passport');

require('./../middleware/passport')(passport);

const EmployeeController = require('../controller/getemployees.controller');
const SigninController = require('../controller/signin.controller');
router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/refreshToken', SigninController.refreshToken);
router.post('/login', SigninController.login);
router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getDesignation', passport.authenticate('jwt', { session: false }), EmployeeController.getDesignation);
router.get('/getRole', passport.authenticate('jwt', { session: false }), EmployeeController.getRole);
router.post('/deleteEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.deleteEmployee);
router.post('/getEmployeeData', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeData);
router.post('/updateEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.updateEmployee);
module.exports = router;