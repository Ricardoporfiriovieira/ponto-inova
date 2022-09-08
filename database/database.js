const sequelize = require("sequelize")
const conection = new sequelize("pontoinova", "root", "124551", {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conection