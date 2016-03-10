#Tansactions got Paint Market API
Version 1.0


This transactions API handles the request from the market client of Paint Market, verifies the validity with user client and send response to the controller.

# Dependencies

express
supertest
body-parser
tape


#1. Create a new transactions

Creates a new transaction JSON object containing the transaction ID, the owner, buyer, painting and price information involved in a transaction. Returns a boolean value indicating a transaction object has been created.

Example.

 POST /v1/transactions/



# 2. Get all transactions

Returns an object containing an array of every transaction object.

req: GET /v1/transactions

res:

  transactions: { [ {transID: 1, ownerID:1, buyerID: 3, paintID: 625, cost: 500, success: true},   {transID: 2, ownerID:34, buyerID: 43, paintID: 25, cost: 100, success: false } ] }

# 3. Query a transaction

Returns a transaction by ID, or a list of transations by buyer, owner or painting.

 Status 200 OK

 Error  404  ID not found

Example.

req: GET /v1/tansactions/1

res:     {transID: 1, ownerID:11, buyerID: 3, paintID: 62, cost: 500, success: true}





req:  GET /v1/tansactions/paintID=65

res: {[{transID: 1, ownerID:55, buyerID: 6, paintID: 65, cost: 500, success: true},
     {transID: 5, ownerID:6, buyerID: 3, paintID: 65, cost: 400, success: true},
     {transID: 9, ownerID:3, buyerID: 19, paintID: 65, cost: 900, success: true} ] }






req:  GET /v1/tansactions/ownerID=55

res:   {[{transID: 21, ownerID:55, buyerID: 656, paintID: 12, cost: 500, success: true},
       {transID: 95, ownerID:55, buyerID: 32, paintD: 72, cost: 400, success: true},
       {transID: 89, ownerID:55, buyerID: 19, paintID: 92, cost: 200, success: true} ] }









