const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, config) => {
    "use strict";
    app.set('view engine', 'pug');


    app.use(cookieParser());
    app.use(session({secret: 'S3cr3t', saveUninitialized: false, resave: false}));
    app.use(passport.initialize());
    app.use(passport.session());

    // MiddleWare to attach Access levels data of logged in user.
    app.use((req, res, next) => {
        if (req.isAuthenticated()) {
            res.locals.hasUserAccess = true;
        }
        if (req.user && req.user.hasAccess('Admin')) {
            res.locals.hasAdminAccess = true;
        }

        next();
    });

    app.use((req, res, next) => {
        if (req.user) {
            res.locals.user = req.user;
        }

        next();
    });

    // Configure middleware for parsing forms
    app.use(bodyParser.urlencoded({extended: true}));
};