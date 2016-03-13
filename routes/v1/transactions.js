var express = require('express');
var router = express.Router();
var fs = require('fs')

var transactions = {}

/* GET transactions list. */
router.get('/', function(req, res) {
  //read object in from file
  fs.readFile('DB.json','utf8', function(err, data){
    transactions = JSON.parse(data)

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
    if(transactionResult.transactions.length == 0){
      res.status(404).send('invalid search parameters')
    }
    else {
      res.json(transactionResult);
  }
  })

});


/* POST new listing*/
router.post('/', function(req, res) {
  fs.readFile('DB.json','utf8', function(err, data){
    transactions = JSON.parse(data)
    var newTransaction = req.body
    //console.log(transactions, newTransaction)
    var viable = true;
    for (var property in newTransaction) {
      if (isNaN(newTransaction[property]) || typeof newTransaction[property] != 'number') {
        viable = false
        res.status(404).send('This transaction has wrong ' + property + ' value. Value entered is ' + newTransaction[property])
      } 
    }
    if (viable){
      // for (var i=0; i<transactions.transactions.length; i++) {
      //   var transObj= transactions.transactions[i]
      //   delete transObj["transactionID"]
      //   console.log(transObj, newTransaction)
      //   if (transObj === newTransaction) {
      //    res.status(404).send("This transaction already exist")
      //    }
      // }
      newTransaction["transactionID"] = transactions.transactions.length+1
      transactions.transactions.push(newTransaction)
      //write file?
      fs.writeFile('DB.json',JSON.stringify(transactions))

      res.json(newTransaction)
    }
  })
});


module.exports = router;
