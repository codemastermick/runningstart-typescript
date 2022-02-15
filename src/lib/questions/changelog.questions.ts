import { DistinctQuestion } from 'inquirer';

const changelogQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'changelog',
    message: 'Do you want to add support for automatic changelog generation?',
    suffix: '(Recommended)',
    default: true
  }
];

export default changelogQuestions;
