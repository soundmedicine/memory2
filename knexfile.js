

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///memory2'
    
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }

};
