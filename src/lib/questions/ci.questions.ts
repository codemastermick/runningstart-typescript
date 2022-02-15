import { DistinctQuestion } from 'inquirer';

const ciQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'ci',
    message: 'Will you be using a CI with this project?',
    suffix: '(Recommended)',
    default: true
  },
  {
    type: 'list',
    name: 'ci_choice',
    message: 'Which CI service will you be using?',
    when: (answers) => answers.ci === true,
    choices: ['Circle CI', 'Travis', 'GitHub Actions']
  }
];

export default ciQuestions;
