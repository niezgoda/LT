import { FizzBuzz } from '../src/FizzBuzz';


describe('FizzBuzz', () => {
    const fizzBuzz = new FizzBuzz();

    it('should generate string from number on 1, 2, 4, 6, etc.', () => {
        expect(fizzBuzz.generate(1)).toBe('1');
        expect(fizzBuzz.generate(2)).toBe('2');
        expect(fizzBuzz.generate(4)).toBe('4');
        expect(fizzBuzz.generate(19523)).toBe('19523');
    });

    it('should generate fizz on divisible by 3', () => {
        expect(fizzBuzz.generate(3)).toBe(FizzBuzz.FIZZ);
        expect(fizzBuzz.generate(6)).toBe(FizzBuzz.FIZZ);
        expect(fizzBuzz.generate(9)).toBe(FizzBuzz.FIZZ);
        expect(fizzBuzz.generate(303)).toBe(FizzBuzz.FIZZ);
        expect(fizzBuzz.generate(909)).toBe(FizzBuzz.FIZZ);
        expect(fizzBuzz.generate(122448)).toBe(FizzBuzz.FIZZ);
    });

    it('should generate buzz on divisible by 5', () => {
        expect(fizzBuzz.generate(5)).toBe(FizzBuzz.BUZZ);
        expect(fizzBuzz.generate(10)).toBe(FizzBuzz.BUZZ);
        expect(fizzBuzz.generate(20)).toBe(FizzBuzz.BUZZ);
        expect(fizzBuzz.generate(2000)).toBe(FizzBuzz.BUZZ);
        expect(fizzBuzz.generate(91231235)).toBe(FizzBuzz.BUZZ);
        expect(fizzBuzz.generate(123145718120)).toBe(FizzBuzz.BUZZ);
    });

    it('should generate fizzbuzz on divisible by 3 and 5', () => {
        expect(fizzBuzz.generate(15)).toBe(FizzBuzz.FIZZBUZZ);
        expect(fizzBuzz.generate(120)).toBe(FizzBuzz.FIZZBUZZ);
        expect(fizzBuzz.generate(420)).toBe(FizzBuzz.FIZZBUZZ);
        expect(fizzBuzz.generate(912000)).toBe(FizzBuzz.FIZZBUZZ);
        expect(fizzBuzz.generate(912312351555)).toBe(FizzBuzz.FIZZBUZZ);
        expect(fizzBuzz.generate(1231457181210)).toBe(FizzBuzz.FIZZBUZZ);
    });
});
