var express = require('express');
var router = express.Router();

var transactions = {
  "transactions": [
    {
      "buyerID": 1,
      "ownerID": 2,
      "paintID": 1,
      "price": 100
    },
    {
      "buyerID": 3,
      "ownerID": 2,
      "paintID": 3,
      "price": 50
    },
    {
      "buyerID": 1,
      "ownerID": 3,
      "paintID": 3,
      "price": 200
    }
]}

/* GET users listing. */
router.post('/', function(req, res, next) {

  var query1 = req.body.buyerID
  var query2 = req.body.ownerID
  var query3 = req.body.paintID
  var query4 = req.body.price

  res.send({buyerId: 'query1', ownerID:'query2', paintingID:'query3', price:'query4'})
});




module.exports = router;
