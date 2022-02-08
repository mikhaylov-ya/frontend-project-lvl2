import path from 'path';
import * as fs from 'fs';
import { cwd } from 'process';
import parseExtension from './parser.js';
import format from './formatters/index.js';
import buildDiffTree from './buildDiffTree.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const getFilePath = (filename) => path.resolve(cwd(), filename);
  const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');

  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  const extension1 = path.extname(filepath1).split('.').pop();
  const extension2 = path.extname(filepath2).split('.').pop();

  const firstObj = parseExtension(readFile1, extension1);
  const secondObj = parseExtension(readFile2, extension2);
  const diffTree = buildDiffTree(firstObj, secondObj);
  return format(diffTree, formatName);
};

export default genDiff;
