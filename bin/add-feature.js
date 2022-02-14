#! /usr/bin/env node
const fs = require('fs');
const { exit } = require('process');

function validateArgs(args) {
  let valid = true;
  if (args[0] === undefined) {
    console.log('Please supply a name for the new feature');
    valid = false;
  } else if (args[1] === undefined) {
    console.log("Please supply a number for the feature's likelihood to toggle");
    valid = false;
  } else if (isNaN(args[1])) {
    console.log('The second argument should be a percentage in float format (eg: 0.1)');
    valid = false;
  }
  if (!valid) {
    exit(1);
  }
}

const configPath = './featbuilder.config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const args = process.argv.slice(2, process.argv.length);
validateArgs(args);

const featName = args[0];
const featPercentage = args[1];

if (!config) {
  console.log("Config file does not exist. Please call 'npx featbuilder init' first");
  exit(1);
} else {
  let newFeature = `{"${featName}":{"percentage":${featPercentage}}}`;
  newFeature = JSON.parse(newFeature);

  config.features.push(newFeature);
  fs.writeFile(configPath, JSON.stringify(config, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(`Updated config file at ${configPath}`);
  });
}
