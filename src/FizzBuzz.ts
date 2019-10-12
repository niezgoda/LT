export class FizzBuzz {
    public static FIZZ = 'fizz';
    public static BUZZ = 'buzz';
    public static FIZZBUZZ = 'fizzbuzz';

    private static divByFizz = 3;
    private static divByBuzz = 5;

    public generate(n: number): string {
        if (n % (FizzBuzz.divByFizz * FizzBuzz.divByBuzz) === 0) {
            return FizzBuzz.FIZZBUZZ;
        }

        if (n % FizzBuzz.divByFizz === 0) {
            return FizzBuzz.FIZZ;
        }

        if (n % FizzBuzz.divByBuzz === 0) {
            return FizzBuzz.BUZZ;
        }

        return String(n);
    }
}