'use strict';
describe('SalesForce Service', function() {
  describe('Configuration', function() {
    it('should be a valid service', function() {
      expect(this.service).to.be.a.flowxo.service;
    });

    it('should define a strategy', function() {
      expect(this.service.auth.strategy).to.exist;
    });

    it('should define strategy options', function() {
      expect(this.service.auth.options).to.have.all.keys('clientID', 'clientSecret', 'state');
    });
  });
});
