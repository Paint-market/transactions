var express = require('express');
var router = express.Router();

var transactions = {
  "transactions": [
    {
      "buyerID": 1,
      "ownerID": 2,
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
  if (Object.getOwnPropertyNames(req.query).length === 0){ //fix this
    transactionResult = transactions
  } else {
    var filteredResults = []
    transactions.transactions.forEach(function(transaction){
      if(transaction.paintingID === Number(req.query.paintingID)){
        filteredResults.push(transaction)
      }
    })
    Object.defineProperty(transactionResult, 'propertyID', {
      value: filteredResults
    })
  }
  console.log(transactionResult)
  res.json(transactionResult);
});




module.exports = router;
