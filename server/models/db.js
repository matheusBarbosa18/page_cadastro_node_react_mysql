const Sequelize = require("sequelize");
//conexao com banco de dados mysql
const sequelize = new Sequelize('crudgames','admin','1Bqnepc2@',{
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
        socketPath:"/var/run/mysqld/mysqld.sock"
    }
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}