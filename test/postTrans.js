var request = require('supertest')
var test = require('tape');
var app = require('../app')
var newTrans= {
      "buyerID": 6,
      "ownerID": 12,
      "paintingID": 5,
      "price": 6
    }

test('post new transaction', function(t){
  request(app)
  .post('/v1/transactions')
  .send(newTrans)
  .expect(200)
  .end(function(err, res){
    t.false(err, "No error returned")
   // console.log(res.body)
   // console.log(res.text)
    t.equal(res.body.transactionID, 6, "Transaction ID for new object is 6")
    t.end()
  })
})

  test('Check new transaction', function(t){
  request(app)
  .post('/v1/transactions')
  .send(newTrans)
  .expect(200)
  .end(function(err, res){
    t.false(err, "No error returned")
    var actualTrans = res.body
    delete actualTrans["transactionID"]
    //console.log(newTrans, actualTrans)
    t.deepEqual(newTrans, actualTrans, "New Transaction created")
    t.end()
  })
})
