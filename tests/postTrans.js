var request = require('supertest')
var test = require('tape');
var app = require('../app')

test('post new transaction', function(t){
  request(app)
  .post('/v1/transactions', )
  .expect(200)
  .end(function(err, res){
    t.false(err)
    t.true(res.body.hasOwnProperty('transactions'))
    t.end()
  })
})

//checks new object can now be found in transactions
test('checks new object can now be found in transactions', function(t){
  request(app)
  .get('/v1/transactions/[number]', )
  .expect(200)
  .end(function(err, res){
    t.false(err)
    t.equal(, )
    t.end()
  })
})
