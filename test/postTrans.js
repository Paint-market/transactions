var request = require('supertest')
var test = require('tape');
var app = require('../app')


test('post new transaction', function(t){
  request(app)
  .post('/v1/transactions')
  .send({
      "buyerID": 6,
      "ownerID": 12,
      "paintingID": 5,
      "price": 6
    })
  .expect(200)
  .end(function(err, res){
    t.false(err, "No error returned")
    t.equal(res.body.transactionID, 5, "Transaction ID for new object is 5")
    t.end()
  })
})

