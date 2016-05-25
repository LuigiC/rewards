var express = require('express');

var rewardService = require('./RewardService');
var eligibilityService = require('./EligibilityService');
var FailureException = require('./EligibilityService');
var InvalidAccountNumber = require('./EligibilityService');
var server = express();

server.get('/rewards/:customerId/:channels', function(request,response){
	var customerId = request.params.customerId;
	var rewardsToReturn = {
		rewards : []
	};
	response.setHeader('Content-Type', 'application/json');
	
	try{
		//EligibilityService is a mock
		var mock = eligibilityService(customerId);

		rewardsToReturn.rewards = rewardService(mock, request.params.channels);
		response.status(200).send(rewardsToReturn);
	}catch(err){	
		rewardsToReturn.errorMsg = err.message;
		//at the moment the description of the error case are return to front end; if in the third case (Technical issues)
		//there is no necessity to return this description, it should check the errorStatus and delete the attribute description
		response.status(err.status).send(rewardsToReturn);
	}
});

server.listen(3000);