import { DistinctQuestion } from 'inquirer';

const vscQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'vsc',
    message: 'Will you be using Visual Studio Code as your editor?',
    suffix: '(Recommended)'
  }
];

export default vscQuestions;
