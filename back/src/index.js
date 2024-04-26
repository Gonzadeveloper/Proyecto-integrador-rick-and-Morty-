const server = require ('./app')
const { sequelize } = require('./DB_connection')
require('dotenv').config()

const { DB_PORT } = process.env
server.listen(DB_PORT, async ()=> {
    await sequelize.sync({force:false})
    console.log('Server is listening on port:' + DB_PORT)
})