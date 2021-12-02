const index = require('../index');
const assert = require('chai').assert

let whenSumNumReturns4 = index.sumNumbers(2, 2); 
let iamnotdefined;
describe('Index test', function() {
    describe('sayHello tests', function() {
        it('should retrun hello', function() {
            assert.equal(index.sayHello(), 'hello');
        });

        it('return type of sayHello should be string', function() {
            assert.typeOf(index.sayHello(), 'string');
            // assert.typeOf(index.sayHello(), 'number'); // this will fail since sayhello returns string
        });
    });

    describe('sumNumbers tests', function() {
        it('returns correct result', function() {
            assert.equal(index.sumNumbers(1, 1), 2);
        });

        it('result should be a number', function() {
            assert.typeOf(index.sumNumbers(1, 1), 'number');
        });

        it('do i exist', function() {
            assert.exists(whenSumNumReturns4, 'whenSumNumReturns4 is null or undefined');
            // assert.exists(iamnotdefined, 'iamnotdefined is null or undefined'); // this will fail
        });
    });
});