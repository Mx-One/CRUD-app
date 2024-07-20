const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud-app',
    password: 'password',
    port: 5001
})

module.exports = pool;
