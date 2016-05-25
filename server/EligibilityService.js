function InvalidAccountNumber(message){
	this.message = message;
	this.name = 'InvalidAccountNumber';
	this.status = 401;
}
function FailureException(message){
	this.message = message;
	this.name = 'FailureException';
	this.status = 500;
}

function eligibilityService(cid){
	if(cid === '1'){
		return 'CUSTOMER_ELIGIBLE';
	}else if(cid === '2'){
		return 'CUSTOMER_INELIGIBLE';
	}else if(cid === '3'){
		//this case is for the 'Technical failure exception'
		throw new FailureException();
	}else{
		throw new InvalidAccountNumber('Invalid account number');
	}
}

exports.FailureException = FailureException;
exports.InvalidAccountNumber = InvalidAccountNumber;
module.exports = eligibilityService;

/*var eligibilityService = (function() {
	function rewards(cid){
		if(cid === '1'){
			return 'CUSTOMER_ELIGIBLE';
		}else if(cid === '2'){
			return 'CUSTOMER_INELIGIBLE';
		}else if(cid === '3'){
			throw {
				errorCode : 0,
				errorStatus : 500,
				description  : 'Technical failure exception'
			}
		}else{
			throw {
				error : 1,
				errorStatus :  401,
				description : 'Invalid account number'
			}
		}
	}

	return {
		getRewards : function(cid){
			return rewards(cid);
		}
	};
})();*/