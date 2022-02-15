import { DistinctQuestion } from 'inquirer';

const commitizenQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'cz',
    message: 'Do you want to enforce the use of commitizen on this project?',
    suffix: '(Recommended)',
    default: true
  }
];

export default commitizenQuestions;
