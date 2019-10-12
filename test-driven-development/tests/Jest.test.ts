describe('Jest', () => {
    let sum = 0;

    beforeEach(() => {
        sum = 0;
    }, 300);

    it('should do something', () => {
        sum += 2;

        expect(() => {
            throw new Error('That is an error');
        }).toThrowError('That is an error');

        expect(sum).toStrictEqual(2);
    });

});

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '.add(%i, %i)',
    (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });

        test(`returned value not be greater than ${expected}`, () => {
            expect(a + b).not.toBeGreaterThan(expected);
        });

        test(`returned value not be less than ${expected}`, () => {
            expect(a + b).not.toBeLessThan(expected);
        });
    },
);


const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
