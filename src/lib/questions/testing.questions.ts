import { DistinctQuestion } from 'inquirer';

const testQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'mocha',
    message: 'Do you want to add testing support?',
    default: true,
    suffix: '(Recommended)'
  },
  {
    type: 'confirm',
    name: 'coverage',
    message: 'Do you want to add coverage testing?',
    default: true,
    suffix: '(Recommended)'
  },
  {
    type: 'confirm',
    name: 'gutters',
    message: 'Do you want to use the coverage gutters VSC extension?',
    default: true,
    suffix: '(Recommended)',
    when: (answers) => answers.coverage === true
  }
];

export default testQuestions;
