describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it('divisble by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });

  describe('When playing, says', function() {

    it('"Java" when a number is divisible by 3', function(){
       expect(fizzbuzz.says(3)).toEqual("Java")
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz")
    });

    it('"JavaBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("JavaBuzz")
    });

  });


});
