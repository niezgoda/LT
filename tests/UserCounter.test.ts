import { UsersCounter } from '../src/UsersCounter';
import { User } from '../src/User';

describe('UserCounter', () => {
    it('should throw when no name is given', () => {
        const uc = new UsersCounter();

        expect(() => {
            uc.getMostPopularName();
        }).toThrowError('There is no names in the Counter');
    });

    it('should get one most popular name', () => {
        const uc = new UsersCounter();

        const joe = new User({
            firstName: 'Joe',
            lastName: 'Snow'
        });

        uc.increase(joe)
            .increase(joe)
            .increase(joe)
            .increase(joe)
            .increase(joe);

        expect(uc.getMostPopularName()).toStrictEqual('Joe Snow');
    });

    it('should get one most popular name', () => {
        const uc = new UsersCounter();

        const joe = new User({
            firstName: 'Joe',
            lastName: 'Snow'
        });

        const claire = new User({
            firstName: 'Claire',
            lastName: 'Blue'
        });

        uc.increase(claire)
            .increase(claire)
            .increase(joe)
            .increase(joe)
            .increase(joe);

        expect(uc.getMostPopularName()).toStrictEqual('Joe Snow');
    });
});