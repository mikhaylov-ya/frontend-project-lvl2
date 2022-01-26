#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import { cwd } from 'process';
import genDiff from '../index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const getFixturePath = (filename) => path.resolve(cwd(), filename);
    // eslint-disable-next-line no-console
    console.log(genDiff(getFixturePath(filepath1), getFixturePath(filepath2)));
  });

program.parse();
