require('dotenv').config() //dotenv me permite utilizar las variables de entorno declaradas en .env 
const { Client } = require('pg'); //requiero el modulo client de pg



let client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: true
});
/*
if(process.env.NODE_ENV !== 'production'){
    client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: false
    });
} else{
    client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: { rejectUnauthorized: false }
    });
}*/

client.connect(function(err) {
    if (err) {
        console.log(err)
    }
    else
        console.log("Connected!")
  });



module.exports = client;