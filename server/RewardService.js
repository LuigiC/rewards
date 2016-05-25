const customer = {
	ELIGIBLE : 'CUSTOMER_ELIGIBLE',
	INELIGIBLE : 'CUSTOMER_INELIGIBLE'
}

const table = {
	SPORTS : 'CHAMPIONS_LEAGUE_FINAL_TICKET',
	KIDS : 'N/A',
	MUSIC : 'KARAOKE_PRO_MICROPHONE',
	NEWS : 'N/A',
	MOVIES : 'PIRATES_OF_THE_CARIBBEAN_COLLECTION'
}

function rewardsToReturn(mock, paramChannels){
    if(mock === customer.ELIGIBLE){
		var channels = paramChannels.split(',');//an array of channels
		var custRewards = [];
		
		for(var i=channels.length -1 ; i>=0; i--){
			if(table[channels[i]] !== 'N/A'){
				custRewards.push(table[channels[i]]);
			}
		}
		return custRewards;
	}else if(mock === customer.INELIGIBLE){
		return [];
	}
	return [];
}

module.exports = rewardsToReturn;