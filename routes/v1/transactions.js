var express = require('express');
var router = express.Router();

var transactions = {
  "transactions": [
    {
      "buyerId": 1,
      "ownerId": 3,
      "paintingId": 1,

    },
    {
      "buyerId": 3,
      "ownerId": 2,
      "paintingId": 3,
      "price": 50
    },
    {
      "buyerId": 1,
      "ownerId": 3,
      "paintingId": 3,
      "price": 200
    },
    {
      "buyerId": 3,
      "ownerId": 5,
      "paintingId": 9,
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


/* POST new listing*/
router.post('/', function(req, res, next) {
  var newTransaction = req.body
  var viableTransaction = true;
  for (var property in newTransaction) {
    if (isNaN(newTransaction[property]) || typeof newTransaction[property] != 'number') {
      viableTransaction = false
      res.status(404).send('This transaction has wrong ' + property + ' value. Value entered is ' + newTransaction[property])
    }
  }
  if (viableTransaction){
  newTransaction["transactionID"] = transactions.transactions.length+1
  transactions.transactions.push(newTransaction)
  res.json(newTransaction)
  }
});




module.exports = router;
