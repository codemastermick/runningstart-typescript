import { DistinctQuestion } from 'inquirer';

const lintingQuestions: DistinctQuestion[] = [
  {
    type: 'checkbox',
    name: 'linting',
    message: 'Which linting tools would you like to use?',
    choices: [
      {
        name: 'editorconfig',
        checked: true
      },
      {
        name: 'eslint',
        checked: true
      },
      {
        name: 'prettier',
        checked: true
      }
    ]
  }
];

export default lintingQuestions;
