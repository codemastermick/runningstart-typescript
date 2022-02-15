import { DistinctQuestion } from 'inquirer';

const nameQuestions: DistinctQuestion[] = [
  {
    type: 'input',
    name: 'name',
    message: 'What would you like to name your package?',
    suffix: '(No newlines, press enter when done)',
    default: 'my-awesome-project'
  }
];

export default nameQuestions;
