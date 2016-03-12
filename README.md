#Transactions got Paint Market API
Version 1.0


This transactions API handles the request from the market client of Paint Market, verifies the validity with user client and send response to the controller.

## Dependencies

* express
* supertest
* body-parser
* tape


##1. Create a new transactions

Creates a new transaction JSON object containing the transaction ID, the owner, buyer, painting and price information involved in a transaction. Returns a JSON object with the newly added transaction object.

###Example.

 POST /v1/transactions/



## 2. Get all transactions

Returns an object containing an array of every transaction object.

req: GET /v1/transactions

res:

        {
          transactions: [
            {
              buyerId: 1,
              ownerId: 3,
              paintingId: 1,
              price: 100
            },
            {
              buyerId: 3,
              ownerId: 2,
              paintingId: 3,
              price: 50
            },
            {
              buyerId: 1,
              ownerId: 3,
              paintingId: 3,
              price: 200
            },
            {
              buyerId: 3,
              ownerId: 5,
              paintingId: 9,
              price: 50
            }
          ]
        }

## 3. Query a transaction

Returns a transaction by ID, or a list of transactions by buyerId, ownerId or paintingId.

 Status 200 OK

 Error  404  ID not found

###Examples

req: GET /v1/tansactions/1

res:     {transID: 1, ownerId:11, buyerId: 3, paintingId: 62, cost: 500, success: true}



**Get all transactions for paintingId 3**

req:  GET /v1/tansactions/?paintingId=3

res:

          {
            transactions: [
              {
                buyerId: 3,
                ownerId: 2,
                paintingId: 3,
                price: 50
              },
              {
                buyerId: 1,
                ownerId: 3,
                paintingId: 3,
                price: 200
              }
            ]
          }

**Get all sale & purchase transactions for userID 3**

req:  GET /v1/tansactions/?buyerId=3&ownerId=3

res:

          {
            transactions: [
              {
                buyerId: 1,
                ownerId: 3,
                paintingId: 1,
                price: 100
              },
              {
                buyerId: 3,
                ownerId: 2,
                paintingId: 3,
                price: 50
              },
              {
                buyerId: 1,
                ownerId: 3,
                paintingId: 3,
                price: 200
              },
              {
                buyerId: 3,
                ownerId: 5,
                paintingId: 9,
                price: 50
              }
            ]
          }


# transactions
Transactions server for Paint Market

# URL
App is deployed to https://paint-market-transactions.herokuapp.com/ . App will be re-deployed automatically whenever there is a pull request accepted into master that passes all the tests.

