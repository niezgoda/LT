export interface Count {
    value: number;
}

export interface CounterInterface {
    get(): Count;
    increase(): CounterInterface;
}

export class Counter implements CounterInterface {
    private value: number = 0;

    public get(): Count {
        return {
            value: this.value
        };
    }

     public increase(): CounterInterface {
        this.value++;

        return this;
    }
}
