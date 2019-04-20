const People = require('./peopleModel.js');

const db = require('../data/dbConfig.js');

describe('personModel Model', () => {
    describe('the insert fn', () => {

        beforeEach(() => {
            return db('people').truncate();
        })
        it('should insert a person into the db', async () => {
            await People.insert({ name: 'Tyrone' })

            const people = await db('people');
            expect(people.length).toBe(1);
            expect(people[0].name).toBe('Tyrone');
        })

        it('should return the inserted person with id', async () => {
            const people = await People.insert({ name: 'Sansa' })

            expect(people.id).toBe(1);
            expect(people.name).toBe('Sansa');
        })
    })

    describe('the getall fn', () => {
        
        beforeEach(() => {
            return db('people').truncate();
        })

        it('should get all people in the db', async () => {
            await db('people').insert([
                { name: 'Sansa'},
                { name: 'Jon'}
            ])

            const people = await People.getAll();

            expect(people.length).toBe(2);
            expect(people[0].name).toBe('Sansa');
            expect(people[0].id).toBe(1);
        })
    })

    describe('the remove fn', () => {
        beforeEach(() => {
            return db('people').truncate();
        })
        it('removes the person from the db', async () => {
            await db('people').insert([
                { name: 'Sansa'},
                { name: 'Jon'}
            ])

            const deleted = People.remove(1);
            const people = await People.getAll();
             
            expect(people.length).toBe(1)
            expect(people[0].name).toBe('Jon');
        })
    })
})