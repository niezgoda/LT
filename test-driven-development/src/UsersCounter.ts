import { Counter, CounterInterface } from './Counter';
import { UserInterface } from './User';

interface NamesCounter {
    [name: string]: CounterInterface;
}

export class UsersCounter {
    private counts: NamesCounter = [] as unknown as NamesCounter;

    public increase(user: UserInterface): UsersCounter {
        const name: string = user.getFullName();

        this.counts[name] = this.counts[name] ? this.counts[name].increase() : new Counter();

        return this;
    }

    public getMostPopularName(): string {
        if (Object.entries(this.counts).length === 0) {
            throw new Error('There is no names in the Counter');
        }

        const mostPopular = Object.entries(this.counts).reduce(
            (acc, [name, counter]) => {
                if (counter.get().value >  acc[1].get().value) {
                    return [name, counter];
                }

                return acc;
            },
            ['', new Counter()]
        );

        return mostPopular[0];
    }
}
