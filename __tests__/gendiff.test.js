import { test, expect, beforeAll } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

let json1;
let json2;
let result;
beforeAll(() => {
  json1 = getFixturePath('file1.json');
  json2 = getFixturePath('file2.json');
  result = readFileSync(getFixturePath('expected_result.txt'), 'utf-8');
});

test('genDiff test suite 1', () => {
  expect(genDiff(json1, json2)).toBe(result);
});
