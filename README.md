# transactions
Transactions server for Paint Market

#Tansactions API Version 1.0


This transactions API handles the request from market client of Paint Market verifies the validity with user client and send response to the controller.

# Dependencies

express
supertest
body-parser
tape


#1. Create a new transactions

Creates a new transaction JSON object containing the transaction ID, the owner, buyer, painting and price information involved in a transaction. Returns a boolean value indicating a transaction object has been created.

POST /v1/transactions/

Response formats boolean.



# 2. Get all transactions

Returns an object containing every transaction object.

GET /v1/transactions

Example Request.

  transactions: { [ {transID: 1, ownerID:1, buyerID: 3, paintingID: 625, cost: 500, success: true}, {transID: 2, ownerID:34, buyerID: 43, paintingID: 25, cost: 100, success: false } ] }

# 3. Query a transaction

Returns a transaction by ID.

 Status 200 OK

 Error  404  ID not found

 GET /v1/tansactions
