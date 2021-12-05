const functions = require('../functions.js');
const assert = require('chai').assert

let whenSumNumReturns4 = functions.biggerNumber(4, 1); 

describe('Function tests for functions.js', function() {
    
    describe('sumNumbers tests', function() {
        it('Returns correct result: case (4, 1)', function() {
            assert.equal(functions.biggerNumber(4, 1), 4);
        });

        it('Returns correct result: case (2, 7)', function() {
            assert.equal(functions.biggerNumber(2, 7), 7);
        });

        it('Returns correct string for equal numbers: case (0, 0)', function() {
            assert.equal(functions.biggerNumber(0, 0), 'The numbers entered are equal.');
        });

        it('Returned result should be a number', function() {
            assert.typeOf(functions.biggerNumber(4, 1), 'number');
        });
    });
});