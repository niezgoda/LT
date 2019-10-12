export interface UserInterface {
    getFirstName(): string;
    getLastName(): string;
    getFullName(): string;
}

interface UserDbRecord {
    firstName: string;
    lastName: string;
}

export class User implements UserInterface {
    private user: UserDbRecord;

    constructor(userDbRecord: UserDbRecord) {
        this.user = userDbRecord;
    }

    getFullName(): string {
        return this.getFirstName() + ' ' + this.getLastName();
    }

    getFirstName(): string {
        return this.user.firstName;
    }

    getLastName(): string {
        return this.user.lastName;
    }

}