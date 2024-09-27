const express = require('express');
const Router = require('express').Router();
const {signup,login} = require('../controller/user.controller.js');

// Import all routes
Router.post('/signup',signup);
Router.post('/login', login);

module.exports = Router;