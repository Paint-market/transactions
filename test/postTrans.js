var request = require('supertest')
var test = require('tape');
var app = require('../app')


test('post new transaction', function(t){
  request(app)
  .post('/v1/transactions')
  .send({
    "buyerId": 6,
    "ownerId": 12,
    "paintingId": 5,
    "price": 6
  })
  .expect(200)
  .end(function(err, res){
    t.false(err, "No error returned")
    //console.log(res.body)
    console.log(res.text)
    t.equal(res.body.transactionID, 5, "Transaction ID for new object is 4")
    t.end()
  })
})

// for (var property in newTransaction) {
//   if (newTransaction.hasOwnProperty(property)) {
//     console.log('this is fog (' + property + ') for sure. Value: ' + newTransaction[property]);
//   }
//   else {
//     console.log(property); // toString or something else
//   }
// }
