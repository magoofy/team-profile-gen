import { Member } from './member.js'

class Manager extends Member {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getJob() {
        return 'Manager';
    }
}

export { Manager };