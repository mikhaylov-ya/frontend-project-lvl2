import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import parseExtension from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (file) => readFileSync(getFixturePath(file), 'utf-8');

const json1 = parseExtension(readFile('file1.json'), 'json');
const json2 = parseExtension(readFile('file2.json'), 'json');
const yaml1 = parseExtension(readFile('file1.yml'), 'yml');
const yaml2 = parseExtension(readFile('file2.yaml'), 'yaml');

const stylishText = readFile('expected_result.txt');
const plainText = readFile('expected_result_plain.txt');
const jsonText = readFile('expected_result_json.txt');

test.each([
  { a: json1, b: json2, expected: stylishText },
  { a: json1, b: yaml2, expected: stylishText },
  { a: yaml1, b: json2, expected: stylishText },
  { a: yaml1, b: yaml2, expected: stylishText },
])('Stylish diff format test', ({ a, b, expected }) => {
  expect(genDiff(a, b, 'stylish')).toBe(expected);
});

test.each([
  { a: json1, b: json2, expected: plainText },
  { a: json1, b: yaml2, expected: plainText },
  { a: yaml1, b: json2, expected: plainText },
  { a: yaml1, b: yaml2, expected: plainText },
])('Plain diff format test', ({ a, b, expected }) => {
  expect(genDiff(a, b, 'plain')).toBe(expected);
});

test.each([
  { a: json1, b: json2, expected: jsonText },
  { a: json1, b: yaml2, expected: jsonText },
  { a: yaml1, b: json2, expected: jsonText },
  { a: yaml1, b: yaml2, expected: jsonText },
])('JSON-format diff test', ({ a, b, expected }) => {
  expect(genDiff(a, b, 'json')).toBe(expected);
});
