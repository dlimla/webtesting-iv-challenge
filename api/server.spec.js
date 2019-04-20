const request = require('supertest');
const server = require('./server.js');

describe('the server', () => {
    it('should set the testing enviroment', () => {
        const env = process.env.DB_ENV;

        expect(env).toBe('testing');
    })

    //normal
    // describe('GET /', () => {
    //     it('should return a status of 200', () => {
    //         return request(server)
    //         .get('/')
    //         .then(res =>{
    //             expect(res.status).toBe(200)
    //         })
    //     })
    // })

    //async
    describe('GET /', () => {
        it('should return a status of 200', async () => {
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');

            expect(res.type).toBe('application/json');
        })

        it('should return {message: "hello there"', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({message: "hello happy people!" })
        })
    })
})
