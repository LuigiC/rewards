var request = require("request");

var base_url = "http://localhost:3000/rewards/";
var parameters = ["1/SPORTS","2/SPORTS","3/SPORTS","4/SPORTS"];

describe("Test the four case of the test", function() {
  var rewardsLength;
  var responseStatus;
  var index = 0;

  beforeEach(function(done){
    request.get(base_url + parameters[index], function(error, response, body) {
      rewardsLength = (JSON.parse(body)).rewards.length;
      responseStatus = response.statusCode;
      done();
    });
    index++;
  });

  describe("GET method under /rewards/{customerId}/{channels}", function() {
    it("Test customerId=1 & channels=SPORTS", function(){
      expect(responseStatus).toBe(200);
      expect(rewardsLength).toBeGreaterThan(0);
    })

    it("Test customerId=2 & channels=SPORTS", function() {
      expect(responseStatus).toBe(200);
      expect(rewardsLength).not.toBeGreaterThan(0);
    });

    it("Test customerId=3 & channels=SPORTS", function() {
      expect(responseStatus).toBe(500);
      expect(rewardsLength).not.toBeGreaterThan(0);
    });

    it("Test customerId=4 & channels=SPORTS", function() {
      expect(responseStatus).toBe(401);
      expect(rewardsLength).not.toBeGreaterThan(0);
    });
  });
});