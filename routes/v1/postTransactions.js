var express = require('express');
var router = express.Router();

var transactions = {
  "transactions": [
    {
      "buyerID": 1,
      "ownerID": 2,
      "paintingID": 1,
      "price": 100,
      "transactionID": 1
    },
    {
      "buyerID": 3,
      "ownerID": 2,
      "paintingID": 3,
      "price": 50,
      "transactionID": 2
    },
    { "buyerID": 1,
      "ownerID": 3,
      "paintingID": 3,
      "price": 200,
      "transactionID": 3
    }
]}

/* GET users listing. */
router.post('/', function(req, res, next) {
  var newTransaction = req.body
  newTransaction["transactionID"] = transactions.transactions.length+1
  transactions.transactions.push(newTransaction)
  console.log(transactions)
  res.json(newTransaction)
});




module.exports = router;
