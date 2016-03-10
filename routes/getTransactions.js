var express = require('express');
var router = express.Router();

var transactions = {
  "transactions": [
    {
      "buyerID": 1,
      "ownerID": 3,
      "paintingID": 1,
      "price": 100
    },
    {
      "buyerID": 3,
      "ownerID": 2,
      "paintingID": 3,
      "price": 50
    },
    {
      "buyerID": 1,
      "ownerID": 3,
      "paintingID": 3,
      "price": 200
    },
    {
      "buyerID": 3,
      "ownerID": 5,
      "paintingID": 9,
      "price": 50
    }
]}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var transactionResult = {}
  var searchParams = Object.keys(req.query)
  if (searchParams.length === 0){
    transactionResult = transactions
  } else {
    var filteredResults = []
    transactions.transactions.forEach(function(transaction){
      for (var i = 0; i < searchParams.length; i++){
        if(transaction[searchParams[i]] === Number(req.query[searchParams[i]])){
          filteredResults.push(transaction)
        }
      }
    })
    transactionResult["transactions"] = filteredResults
  }
  res.json(transactionResult);
});

module.exports = router;
