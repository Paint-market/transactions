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
              buyerID: 1,
              ownerID: 3,
              paintingID: 1,
              price: 100
            },
            {
              buyerID: 3,
              ownerID: 2,
              paintingID: 3,
              price: 50
            },
            {
              buyerID: 1,
              ownerID: 3,
              paintingID: 3,
              price: 200
            },
            {
              buyerID: 3,
              ownerID: 5,
              paintingID: 9,
              price: 50
            }
          ]
        }

## 3. Query a transaction

Returns a transaction by ID, or a list of transactions by buyerID, ownerID or paintingID.

 Status 200 OK

 Error  404  ID not found

###Examples

req: GET /v1/tansactions/1

res:     {transID: 1, ownerID:11, buyerID: 3, paintingID: 62, cost: 500, success: true}



**Get all transactions for paintingID 3**

req:  GET /v1/tansactions/?paintingID=3

res:

          {
            transactions: [
              {
                buyerID: 3,
                ownerID: 2,
                paintingID: 3,
                price: 50
              },
              {
                buyerID: 1,
                ownerID: 3,
                paintingID: 3,
                price: 200
              }
            ]
          }

**Get all sale & purchase transactions for userID 3**

req:  GET /v1/tansactions/?buyerID=3&ownerID=3

res:

          {
            transactions: [
              {
                buyerID: 1,
                ownerID: 3,
                paintingID: 1,
                price: 100
              },
              {
                buyerID: 3,
                ownerID: 2,
                paintingID: 3,
                price: 50
              },
              {
                buyerID: 1,
                ownerID: 3,
                paintingID: 3,
                price: 200
              },
              {
                buyerID: 3,
                ownerID: 5,
                paintingID: 9,
                price: 50
              }
            ]
          }


# transactions
Transactions server for Paint Market

# URL
App is deployed to https://paint-market-transactions.herokuapp.com/ . App will be re-deployed automatically whenever there is a pull request accepted into master that passes all the tests.

