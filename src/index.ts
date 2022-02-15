import Config from './config';
import questionnaire from './lib/questionnaire';

let config: Config;

questionnaire().then((results) => {
  config = results;
  console.log(JSON.stringify(config));
});

// build project here using config file
