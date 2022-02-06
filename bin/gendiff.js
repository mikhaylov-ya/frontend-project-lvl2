#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import * as fs from 'fs';
import { cwd } from 'process';
import genDiff from '../src/index.js';
import parseExtension from '../src/parser.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const getFilePath = (filename) => path.resolve(cwd(), filename);
    const readFile1 = fs.readFileSync(getFilePath(filepath1), 'utf-8');
    const readFile2 = fs.readFileSync(getFilePath(filepath2), 'utf-8');
    const extension1 = path.extname(filepath1).substring(1);
    const extension2 = path.extname(filepath2).substring(1);
    const firstObject = parseExtension(readFile1, extension1);
    const secondObject = parseExtension(readFile2, extension2);

    const formDiff = genDiff(firstObject, secondObject, options.format);
    // eslint-disable-next-line no-console
    console.log(formDiff);
  })
  .parse();
