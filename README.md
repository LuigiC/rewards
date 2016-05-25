# rewards

Mandatory package to install:
-npm install express --save
-npm install jasmine --save
-npm install jasmine-node --save
-npm install request --save

After, just start the server (from the root node server/server.js otherwise in the server folder node server.js)

To make a request to the server, type http://localhost:3000/rewards/{idCustomer}/channel1,chanel2,ext
(At the moment we have only 4 customer 1 -> Eligible; 2 -> Not Eligible; 3 -> FailureException; 4 -> InvalidAccountNumber)
