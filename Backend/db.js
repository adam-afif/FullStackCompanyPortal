require('dotenv').config({path:'./routes/.env'}); 
const mysql = require("mysql2");

const db = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT,
    connectionLimit: 5, //Clever cloud's free plan
    waitForConnections: true,
    queueLimit: 0
  });

  //Make db accessible to other files
  module.exports = db;