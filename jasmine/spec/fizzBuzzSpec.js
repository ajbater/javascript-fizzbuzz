describe('FizzBuzz', function() {
  var fizzBuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it(('divisble by 3'), function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

});
