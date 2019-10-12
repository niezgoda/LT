import { Counter } from '../src/Counter';

describe('Counter', () => {
    it('should increase by one when no other service is running', () => {
        const counter = new Counter();
        const value = counter.get().value;

        counter.increase();

        expect(counter.get().value).toStrictEqual(value + 1);
    });

    it('should increase by one when other service is running but not in async', () => {
        const counter = new Counter();

        counter.increase();
        counter.increase();
        counter.increase();
        counter.increase();

        const value = counter.get().value;

        counter.increase();
        counter.increase();
        counter.increase();

        expect(counter.get().value).toStrictEqual(value + 3);
    });
});