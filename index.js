import inquirer from 'inquirer';
import fs from 'fs'

//import job types
import { Manager }from './lib/manager.js'
import { Engineer }from './lib/engineer.js'
import { Intern }from './lib/intern.js'

//import template for each job type
import { managerTemplate } from './src/manager-template.js'
import { engineerTemplate } from './src/engineer-template.js'
import { internTemplate } from './src/intern-template.js'
import { mainHTML } from './src/main-html.js'

const team = [];

// Add manager, first question
const addManager = [
    {
        name: 'start',
        type: 'confirm',
        message: "Welcome to your Team's profile generator. Press Enter to start."
    },
    {
        name: 'name',
        type: 'input',
        message: "Enter the name of the manager."
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the id of the manager?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the email of the manager?"
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the office number?'
    },
    {
        name: 'continue',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
        message: "What would you like to do next?"
    }
];

// Adds engineer
const addEngineer = [
    {
        name: 'name',
        type: 'input',
        message: "Enter the name of the engineer."
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the id of the engineer?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the email of the engineer?"
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is the github username of the engineer?'
    },
    {
        name: 'continue',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
        message: "What would you like to do next?"
    }
];

// Adds intern
const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: "Enter the name of the intern."
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the id of the intern?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the email of the intern?"
    },
    {
        name: 'school',
        type: 'input',
        message: 'What school does the intern attend?'
    },
    {
        name: 'continue',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
        message: "What would you like to do next?"
    }
];

// Begins prompt function
function beginPrompt(questions) {
    inquirer
        .prompt(questions)
        .then((member) => {
            team.push(member);

            if (member.continue === 'Add Engineer') {
                beginPrompt(addEngineer);
            } else if (member.continue === 'Add Intern') {
                beginPrompt(addIntern);
            } else {
                createTeam(team)
            }
        })
        .catch((err) => console.log(err));
}

// Creates team and assigns job type
function createTeam(team) {

    const members = team.map((member) => {
        const { name, id, email } = member;

        if (member.hasOwnProperty('officeNumber')) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        if (member.hasOwnProperty('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        if (member.hasOwnProperty('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });

    generateHtml(members);
}

// writing the html into a string
function generateHtml(profiles) {
    let profileTemplates = '';
    profiles.forEach((profile) => {
        // if 'profile' is manager, write manager template
        if (profile instanceof Manager) {
            const template = managerTemplate(profile);
            profileTemplates += template;
        // if 'profile' is engineer, write engineer template
        } else if (profile instanceof Engineer) {
            const template = engineerTemplate(profile);
            profileTemplates += template;
        // if 'profile' is intern, write intern template
        } else if (profile instanceof Intern) {
            const template = internTemplate(profile);
            profileTemplates += template;
        }
    })

    // after each profile template is written, insert into main html
    const newHtml = mainHTML(profileTemplates);

    writeHtml(newHtml);
};

// creates the html file
function writeHtml(newHtml) {
    fs.writeFile('./dist/team.html', newHtml, (err) => {
        if (err) throw err;
        console.log('HTML file successfully created in the /dist folder.');
    });
};

beginPrompt(addManager);
