#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program.parse();
