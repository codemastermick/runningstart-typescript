import { expect } from 'chai';
import Config from '../src/config';

const questionnaireResults: Config = new Config();

describe('Default Config Test Suite', function () {
  describe('a default config should', function () {
    it('use the default packageName', async function () {
      expect(questionnaireResults.packageName).to.equal('my-awesome-project');
    });
    it('have Visual Studio Code support', async function () {
      expect(questionnaireResults.vsc).to.be.true;
    });
    it('have EditorConfig support', async function () {
      expect(questionnaireResults.editorconfig).to.be.true;
    });
    it('have ESLint support', async function () {
      expect(questionnaireResults.eslint).to.be.true;
    });
    it('have Prettier support', async function () {
      expect(questionnaireResults.prettier).to.be.true;
    });
    it('have Mocha support', async function () {
      expect(questionnaireResults.mocha).to.be.true;
    });
    it('have c8 support', async function () {
      expect(questionnaireResults.coverage).to.be.true;
    });
    it('have support for generating documentation', async function () {
      expect(questionnaireResults.docs).to.be.true;
    });
    it('publish docs to GitHub Pages', async function () {
      expect(questionnaireResults.gh_pages).to.be.true;
    });
    it('make use of commitizen', async function () {
      expect(questionnaireResults.commitizen).to.be.true;
    });
    it('automatically generate changelogs', async function () {
      expect(questionnaireResults.changelog).to.be.true;
    });
    it('use a continuous integration service', async function () {
      expect(questionnaireResults.ci).to.be.true;
    });
    it('be set up for Circle CI', async function () {
      expect(questionnaireResults.ci_choice).to.equal('Circle');
    });
  });
});
