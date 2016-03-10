var request = require('supertest')
var test = require('tape');
//our file

test('get v1/transactions/', function(t){
  request(filename)
    .get('/v1/transactions')
    .expect(200)
    .end(function(err, res){
      t.false(err)
      t.true(res.body.hasOwnProperty('transactions'))
      t.end()
    })
})

test('get v1/transactions filtered by paintingID', function(t){
  request(filename)
      .get('/v1/transactions')
      .query({paintingID: '3'})
      .expect(200)
      end(function(err, res){
        t.false(err)
        //need to wait for structure to be decided
        t.deepEqual(res.body.transactions[painting1d], 3, "returns all transaction with painting id 3")
        t.end()
      })
})

test('get v1/transactions filtered by ownerID', function(t){
request(filename)
      .get('/v1/transactions')
      .query({ownerID: '3'})
      .expect(200)
      end(function(err, res){
        t.false(err)
        //need to wait for structure to be decided
        t.deepEqual(res.body.transactions[ownerID], 3, "returns all sales transactions for this user")
        t.end()
      })
})

test('get v1/transactions filtered by buyerID', function(t){
request(filename)
      .get('/v1/transactions')
      .query({buyerID: '3'})
      .expect(200)
      end(function(err, res){
        t.false(err)
        //need to wait for structure to be decided
        t.deepEqual(res.body.transactions[buyerID], 3, "returns all purchase transactions for this user")
        t.end()
      })
})

test('get v1/transactions filtered by buyerID and ownerID', function(t){
request(filename)
      .get('/v1/transactions')
      .query({buyerID: '3', ownerID: '3'})
      .expect(200)
      end(function(err, res){
        t.false(err)
        //need to wait for structure to be decided
        t.deepEqual(res.body.transactions[buyerID] ,3, "returns all purchase and sales transactions for this user")
        t.end()
      })
})
