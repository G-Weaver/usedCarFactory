const { Pool } = require('pg');

// linking our file to the database
const PG_URI = 'postgres://wznmajft:WGPhshxsEeM0F_Vu3xjmWGxvC0vOXr-e@ziggy.db.elephantsql.com:5432/wznmajft'

// creating a pool using the string in PG_URI
const pool = new Pool({
    connectionString: PG_URI
})

// exporting an object with a property named query
// query is a function that returns the invocation of poolquery() after logging the query
// required in controller, it is the access point to the database
module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text)
        return pool.query(text, params, callback)
    }
}