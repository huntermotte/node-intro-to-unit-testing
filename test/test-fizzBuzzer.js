const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizzBuzz if the number is divisible by 15', function() {
    const normalCases = [15,30,45];
    normalCases.forEach(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    }
  })
});

describe('fizzBuzzer', function () {
  it('should return buzz if the number is divisible by 5', function() {
    const normalCases = [5,10,20];
    normalCases.forEach(input) {
      fizzBuzzer(input).should.equal('buzz')
    }
  }
});

describe('fizzBuzzer', function () {
  it('should return fizz is the number is divisible by 3', function () {
    const normalCases = [3,6,9];
    normalCases.forEach(input) {
      fizzBuzzer(input).should.equal('fizz')
    }
  })
});

describe('fizzBuzzer', function() {
  it('should return a number if not a fizzBuzz number', function() {
    const normalCases = [1,2,4,7,11];
    normalCases.forEach(input) {
      fizzBuzzer(input).should.equal(input);
    }
  })
});

describe('fizzBuzzer', function() {
  it('should give us an error if not a number', function() {
    const errorCases = ['a', true, function()];
    errorCases.forEach(function(input) {
      fizzBuzzer(input).should.throw(Error)
    }
  })
});
