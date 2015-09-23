'use strict';

describe('ngSocial.version module', function() {
  beforeEach(module('ngSocial.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
