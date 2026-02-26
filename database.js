const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_api_2026",
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = connection.promise();