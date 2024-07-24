const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud-app',
    password: '123592',
    port: 5001
})

module.exports = pool;
