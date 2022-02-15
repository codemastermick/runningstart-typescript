import inquirer, { Answers } from 'inquirer';
import Config from '../config';
import documentationQuestions from './questions/documentation.questions';
import lintingExtensionQuestions from './questions/linting.extensions.questions';
import lintingQuestions from './questions/linting.questions';
import nameQuestions from './questions/name.questions';
import testQuestions from './questions/testing.questions';
import vscQuestions from './questions/vsc.questions';

async function questionnaire(): Promise<Config> {
  return new Promise((resolve, reject) => {
    const config = new Config();
    inquirer
      .prompt(nameQuestions)
      .then((answers: Answers) => {
        config.packageName = answers.name;
        inquirer.prompt(vscQuestions).then((answers) => {
          config.vsc = answers.vsc;
          inquirer.prompt(lintingQuestions).then((answers) => {
            const lintingResponse = answers;
            config.editorconfig = lintingResponse.editorconfig;
            config.eslint = lintingResponse.eslint;
            config.prettier = lintingResponse.prettier;
            if (config.vsc) {
              inquirer.prompt(lintingExtensionQuestions).then((answers) => {
                answers.lintingExtensions.forEach((extension: string) => {
                  let value;
                  switch (extension) {
                    case 'EditorConfig':
                      value = 'editorconfig.editorconfig';
                      break;
                    case 'ESLint':
                      value = 'dbaeumer.vscode-eslint';
                      break;
                    case 'Prettier':
                      value = 'esbenp.prettier-vscode';
                      break;
                    default:
                      break;
                  }
                  if (value) {
                    config.extensions.push(value);
                  }
                });
                inquirer.prompt(testQuestions).then((answers) => {
                  config.mocha = answers.mocha;
                  config.coverage = answers.coverage;
                  config.extensions.push('ryanluker.vscode-coverage-gutters');
                  inquirer.prompt(documentationQuestions).then((answers) => {
                    config.docs = answers.docs;
                    config.gh_pages = answers.gh_pages;
                    resolve(config);
                  });
                });
              });
            }
          });
        });
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log('Cannot use RunningStart in this environment!');
        } else {
          console.log(error);
        }
        reject(error);
      });
  });
}

export default questionnaire;
