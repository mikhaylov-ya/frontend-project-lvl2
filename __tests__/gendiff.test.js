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
let yaml1;
let yaml2;
let result;
let readResult;

beforeAll(() => {
  json1 = getFixturePath('file1.json');
  json2 = getFixturePath('file2.json');
  yaml1 = getFixturePath('file1.yaml');
  yaml2 = getFixturePath('file2.yaml');
  result = getFixturePath('expected_result.txt');
  readResult = readFileSync(result, 'utf-8');
});

test('JSON diff test', () => {
  expect(genDiff(json1, json2)).toBe(readResult);
});

test('YAML diff test', () => {
  expect(genDiff(yaml1, yaml2)).toBe(readResult);
});

test('YAML to JSON diff test', () => {
  expect(genDiff(yaml1, json2)).toBe(readResult);
});

test('JSON to YAML diff test', () => {
  expect(genDiff(json1, yaml2)).toBe(readResult);
});
