/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
 */
'use strict';

require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const port = process.env.PORTSERVE;
const url = process.env.URL;

mongoose.connect(process.env.DBSTRING)
.then(()=>{
    app.listen(port, ()=>{
        console.log('Server ON');
        console.log('Database Enable');
        console.log('Server listen:',url + ':'+ port);
    })
})
.catch(err => console.log(err)); 