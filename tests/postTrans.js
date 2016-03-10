var request = require('supertest')
var test = require('tape');
var app = require('../app')


test('post new transaction', function(t){
  request(app)
  .post('/v1/transactions')
  .send({
      "buyerID": 6,
      "ownerID": 12,
      "paintID": 13,
      "price": 510
    })
  .expect(200)
  .end(function(err, res){
    t.false(err)
    t.true(typeof res.body === 'object', "test for post return object")
    t.end()
  })
})

