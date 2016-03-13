var request = require('supertest')
var test = require('tape');
var app = require('../app')

test('get v1/transactions/', function(t){
  request(app)
    .get('/v1/transactions')
    .expect(200)
    .end(function(err, res){
      t.false(err, 'no error for false')
      t.true(res.body.hasOwnProperty('transactions'), 'res.body returns an object that has a property called transactions')
      t.equal(res.body.transactions.length, 4, "returns all transactions")
      t.end()
    })
})

test('get v1/transactions filtered by paintingId', function(t){
  request(app)
      .get('/v1/transactions')
      .query({paintingId: '3'})
      .expect(200)
      .end(function(err, res){
        t.false(err, 'no error for false')
        t.equal(res.body.transactions.length, 2, "returns all transaction with painting Id 3")
        t.end()
      })
})

test('get v1/transactions filtered by ownerId', function(t){
request(app)
      .get('/v1/transactions')
      .query({ownerId: '3'})
      .expect(200)
      .end(function(err, res){
        t.false(err, 'no error returned')
        t.deepEqual(res.body.transactions.length, 2, "returns all sales transactions for this user")
        t.end()
      })
})

test('get v1/transactions filtered by buyerId', function(t){
request(app)
      .get('/v1/transactions')
      .query({buyerId: '3'})
      .expect(200)
      .end(function(err, res){
        t.false(err, 'no error returned')
        t.deepEqual(res.body.transactions.length, 2, "returns all purchase transactions for this user")
        t.end()
      })
})

test('get v1/transactions filtered by buyerId and ownerId', function(t){
request(app)
      .get('/v1/transactions')
      .query({buyerId: '3', ownerId: '3'})
      .expect(200)
      .end(function(err, res){
        t.false(err, 'no error returned')
        t.deepEqual(res.body.transactions.length, 4, "returns all purchase and sales transactions for this user")
        t.end()
      })
})

test('if filterd results returns an empty object, throw error ', function(t){
request(app)
      .get('/v1/transactions')
      .query({buyerId: '900'})
      .expect(404)
      .end(function(err, res){
        t.false(err, "this is the correct error code")
        t.deepEqual(res.text, 'invalId search parameters', "the response detected invalId search perameters")
        t.end()
      })
})

