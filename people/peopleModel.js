const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    remove,
    getAll
};

async function insert(person) {
    const [id] = await db('people').insert(person)

    return db('people').where({ id }).first();
}
async function remove(id) {
    const remove = await db('people').where({ id }).del();

    return remove;
    
}

async function getAll() {
    return db('people');
}