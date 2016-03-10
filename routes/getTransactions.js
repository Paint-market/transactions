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
    }
]}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var transactionResult = {}
  var searchParams = Object.keys(req.query)
  console.log('searchParams: ', searchParams)
  if (searchParams.length === 0){
    transactionResult = transactions
  } else {
    var filteredResults = []
    transactions.transactions.forEach(function(transaction){
      if(transaction[searchParams[0]] === Number(req.query[searchParams[0]])){
        filteredResults.push(transaction)
      }
    })
    console.log('filteredResults: ',filteredResults)
    transactionResult["transactions"] = filteredResults
  }
  console.log(transactionResult)
  res.json(transactionResult);
});

module.exports = router;
