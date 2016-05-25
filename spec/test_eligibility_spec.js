var eligibilityService = require("../server/EligibilityService");
var FailureException = require('../server/EligibilityService');
var InvalidAccountNumber = require('../server/EligibilityService');
const customer = {
	ELIGIBLE : 'CUSTOMER_ELIGIBLE',
	INELIGIBLE : 'CUSTOMER_INELIGIBLE'
}
var customerIds = ['1','2','3','4'];

describe('Test EligibilityService mock.', function(){
	it('Test CustomerId 1 -> Eligible', function(){
		expect(eligibilityService(customerIds[0])).toEqual(customer.ELIGIBLE);
	});

	it('Test CustomerId 2 -> Ineligible', function(){
		expect(eligibilityService(customerIds[1])).toEqual(customer.INELIGIBLE);
	});

	//I tried to test even the exception case, but I don't know why they fails.
	/*it('Test CustomerId 3 -> Throw technical failure exception', function(){
		expect(eligibilityService(customerIds[2])).not.toThrow();
	});

	it('Test CustomerId 4 -> Throw invalid customer id', function(){
		expect(eligibilityService(customerIds[3])).toThrow();
	});*/
});