const index = require('..//index');
const assert = require('chai').assert;

describe ('Index test', function() {
    it('should return hello', function() {
        assert.equal(index.sayHello(), 'hello');
    });
});