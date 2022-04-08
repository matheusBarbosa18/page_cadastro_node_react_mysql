const db = require('./db')
const Post = db.sequelize.define('users',{
    name:{
        type: db.Sequelize.STRING
    },
    cost:{
        type: db.Sequelize.TEXT
    },
    category:{
        type: db.Sequelize.TEXT
    }
})
//comentar a linha 14 apos a primeira execução (ele vai criar a tabela pra vc de acordo com as colunas definidas acima)
//  Post.sync({force: true})


module.exports = Post