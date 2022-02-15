import questionnaire from '../src/lib/questionnaire';
import { expect } from 'chai';
import { before } from 'mocha';
import Config from '../src/config';

let questionnaireResults: Config;

describe('Questionnaire Test Suite', function () {
  before(async function (done) {
    this.timeout(1000 * 30);
    try {
      questionnaire().then((results) => {
        questionnaireResults = results;
        done();
      });
    } catch (error) {
      done(error);
    }
  });
  describe('with default answers', function () {
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
    it('have publish docs to GitHub Pages', async function () {
      expect(questionnaireResults.gh_pages).to.be.true;
    });
  });
});
