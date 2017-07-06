const path = require('path');

let dbName = 'showdown';

module.exports = {
    development: {
        connectionString: `mongodb://localhost:27017/${dbName}`
    },
    production: {}
};