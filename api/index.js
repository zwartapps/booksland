"use strict";

//Converted var mongoose = require ('mongoose') to ES6 code 
import { Promise, connect } from 'mongoose';

Promise = global.Promise;
//new url parser added, new Server Discover and Monitoring engine added
connect('mongodb://localhost:27017/booksland', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => {
        console.log("conexion a BD booksland se ha realizado correctamente!!")
    }).catch(err => console.log(err));

    
