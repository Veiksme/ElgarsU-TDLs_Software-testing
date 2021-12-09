//const functions = require('../functions.js');
const [biggerNumber, numberSquares] = require('./functions.js');
const assert = require('chai').assert

describe('Node tests for functions.js', function() {

    //Test cases for different numbers
    describe('sumNumbers() function test set:', function() {
        it('Returns correct result: case (4, 1)', function() {
            assert.equal(functions.biggerNumber(4, 1), 4);
        });

        it('Returns correct result: case (2, 7)', function() {
            assert.equal(functions.biggerNumber(2, 7), 7);
        });
        //Test case for equal numbers
        it('Returns correct string for equal numbers: case (0, 0)', function() {
            assert.equal(functions.biggerNumber(0, 0), 'The numbers entered are equal.');
        });
        //Test case for output type
        it('Returned result should be a number', function() {
            assert.typeOf(functions.biggerNumber(4, 1), 'number');
        });
    });

    describe('numberSquares() function test set:', function() {
        it('Returns correct string: case (0)', function() {
            assert.equal(functions.numberSquares(0), 'You entered 0, square count is 0');
        });

        it('Returns correct result: case (2)', function() {
            assert.equal(functions.numberSquares(2), 5);
        });

        it('Returns correct result: case (3)', function() {
            assert.equal(functions.numberSquares(3), 14);
        });
        //Test case for output type
        it('Returned result should be a number', function() {
            assert.typeOf(functions.numberSquares(1), 'number');
        });
    });
});