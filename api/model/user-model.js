const db = require('../../data/dbConfig')

async function add(user) {
   const [id] = await db('users').insert(user) 

    return db('users').where({id}).first()
}

async function findBy(username) {
    return await db('users').where('username', username).first()
    
}

module.exports = {
    add,
    findBy
}