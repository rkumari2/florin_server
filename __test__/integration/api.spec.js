const request = require('supertest')
const app = require('../../app')


let api;

describe('api server', () => {
    beforeAll(()=> {
        api = app.listen(4000, () => {
            console.log('Test server running in port 4000')
        })
    })

    afterAll((done) => {
        console.log('Gracefully stopping the test server')
        api.close(done)
    })

    test('it respons to GET/ with status 200', (done)=> {
        request(api)
          .get('/')
          .expect(200, done)
    })

    
    
    test('responds to GET /:name with a 200', (done) => {
        request(api)
            .get('/categories')
            .expect(200, done)
    })
        
        

          
          // test('responds to invalid method request with 405', (done) => {
          //     request(api).post('/:category').expect(405,done) 
          // })
      
          // test('responds to DELETE /:id with status 204', (done) => {
          //     request(api).delete('/suggestions/1').expect(204,done)
          //   })
          

})
