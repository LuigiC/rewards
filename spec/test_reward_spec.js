var rewardService = require("../server/RewardService");
var channelsWithRewards = 'SPORTS,MUSIC,MOVIES';
var channelsWithoutRewards = 'KIDS,NEWS';
const customer = {
	ELIGIBLE : 'CUSTOMER_ELIGIBLE',
	INELIGIBLE : 'CUSTOMER_INELIGIBLE'
}

describe('Test RewardService mock', function(){
	describe('Test the CUSTOMER_ELIGIBLE case', function(){
		it('The customer has some rewards:', function(){
			expect(rewardService(customer.ELIGIBLE, channelsWithRewards).length).toBeGreaterThan(0);
		});

		it('The customer has not rewards:', function(){
			expect(rewardService(customer.ELIGIBLE, channelsWithoutRewards).length).not.toBeGreaterThan(0);
		})

		it('The rewards array do not contain N/A item', function(){
			var allChannel = channelsWithRewards + ',' + channelsWithoutRewards;
			expect(rewardService(customer.ELIGIBLE, allChannel)).not.toContain('N/A');
		})
	});

	describe('Test the CUSTOMER_INELIGIBLE case', function(){
		it('The channels have some rewards associated and the customer is ineligible:', function(){
			expect(rewardService(customer.INELIGIBLE, channelsWithRewards).length).not.toBeGreaterThan(0);
		});

		it('The channels have no rewards associated and the customer is ineligible:', function(){
			expect(rewardService(customer.INELIGIBLE, channelsWithoutRewards).length).not.toBeGreaterThan(0);
		})

		it('The rewards array do not contain N/A item', function(){
			expect(rewardService(customer.INELIGIBLE, channelsWithRewards)).not.toContain('N/A');
		})
	});
});