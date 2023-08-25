const request = require('supertest')
const app = require('../../app')


let api;

describe('api server', () => {
    let api;
  
    beforeAll(() => {
      api = app.listen(4000, () => {
        console.log('Test server running in port 4000')
      })
    })
  
    afterAll((done) => {
      console.log('Gracefully stopping the test server')
      api.close(done)
    })
  
    test('responds to GET / with status 200', (done) => {
      request(api)
        .get('/')
        .expect(200, done)
    })
  
    test('responds to GET /suggestions with status 200', (done) => {
      request(api)
        .get('/suggestions')
        .expect(200,done)
    })
  
    test('responds to GET /suggestions/:name with a 200', (done) => {
      request(api)
        .get('/suggestions/recycling')
        .expect(200, done)
    })
  
    test('responds to a unknown category :name with a 404', (done) => {
      request(api)
        .get('/suggestions/sddsfd')
        .expect(404)
        .expect({ error: 'No suggestions available in this category!' }, done)
    })
  
  })
