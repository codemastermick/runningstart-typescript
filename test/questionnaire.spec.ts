import questionnaire from '../src/lib/questionnaire';
import { expect } from 'chai';
import { before } from 'mocha';
import Config from '../src/config';

const questionnaireResults: Config = new Config();

describe('Hello Test Suite', function () {
  it('return a the default packageName', async function () {
    expect(questionnaireResults.packageName).to.equal('my-awesome-project');
  });
});
