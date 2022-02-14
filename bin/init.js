#! /usr/bin/env node
const fs = require('fs');
const { exit } = require('process');

const samplePath = './src/config.sample.json';
const destinationPath = 'featbuilder.config.json';

if (fs.existsSync(destinationPath)) {
  console.log('Config file already exists. Exiting...');
  exit(1);
}

fs.copyFile(samplePath, destinationPath, (err) => {
  if (err) {
    console.log('Error Found:', err);
    exit(1);
  } else {
    console.log('Config file created!');
    exit(0);
  }
});
