#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const formDiff = genDiff(filepath1, filepath2, options.format);
    // eslint-disable-next-line no-console
    console.log(formDiff);
  })
  .parse();
