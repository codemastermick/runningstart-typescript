import { DistinctQuestion } from 'inquirer';

const lintingExtensionQuestions: DistinctQuestion[] = [
  {
    type: 'checkbox',
    name: 'lintingExtensions',
    message: 'Do you want to use any VSC extensions for linting?',
    choices: [
      {
        name: 'EditorConfig',
        checked: true
      },
      {
        name: 'ESLint',
        checked: true
      },
      {
        name: 'Prettier',
        checked: true
      }
    ]
  }
];

export default lintingExtensionQuestions;
