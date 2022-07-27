import { Member } from './member.js'

class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getJob() {
        return 'Engineer';
    }
}

export { Engineer };