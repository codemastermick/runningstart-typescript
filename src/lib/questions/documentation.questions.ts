import { DistinctQuestion } from 'inquirer';

const documentationQuestions: DistinctQuestion[] = [
  {
    type: 'confirm',
    name: 'docs',
    message: 'Do you want to add typedoc for automatic documentation?',
    suffix: '(Recommended)',
    default: true
  },
  {
    type: 'confirm',
    name: 'gh_pages',
    message: 'Do you want to add gh-pages for automatic documentation publishing?',
    when: (answers) => answers.docs === true
  }
];

export default documentationQuestions;
