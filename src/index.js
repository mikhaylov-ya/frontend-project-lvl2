import path from 'path';
import * as fs from 'fs';
import { cwd } from 'process';
import parseExtension from './parser.js';
import format from './formatters/index.js';
import buildDiffTree from './buildDiffTree.js';

const getFilePath = (filename) => path.resolve(cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');
const extractExtension = (file) => path.extname(file).substring(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  const extension1 = extractExtension(filepath1);
  const extension2 = extractExtension(filepath2);

  const firstObj = parseExtension(readFile1, extension1);
  const secondObj = parseExtension(readFile2, extension2);
  const diffTree = buildDiffTree(firstObj, secondObj);
  return format(diffTree, formatName);
};

export default genDiff;
