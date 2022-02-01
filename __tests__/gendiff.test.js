import {
  test,
  expect,
  beforeAll,
  describe,
} from '@jest/globals';
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
let stylishText;
let stylishResult;
let plainText;
let plainResult;

beforeAll(() => {
  json1 = getFixturePath('file1.json');
  json2 = getFixturePath('file2.json');
  yaml1 = getFixturePath('file1.yaml');
  yaml2 = getFixturePath('file2.yaml');
  stylishText = getFixturePath('expected_result.txt');
  stylishResult = readFileSync(stylishText, 'utf-8');
  plainText = getFixturePath('expected_result_plaint.txt');
  plainResult = readFileSync(plainText, 'utf-8');
});

describe('Stylish diff format', () => {
  test('JSON diff test', () => {
    expect(genDiff(json1, json2, 'stylish')).toBe(stylishResult);
  });

  test('YAML diff test', () => {
    expect(genDiff(yaml1, yaml2, 'stylish')).toBe(stylishResult);
  });

  test('YAML to JSON diff test', () => {
    expect(genDiff(yaml1, json2, 'stylish')).toBe(stylishResult);
  });

  test('JSON to YAML diff test', () => {
    expect(genDiff(json1, yaml2, 'stylish')).toBe(stylishResult);
  });
});

describe('Plain diff format', () => {
  test('JSON diff test', () => {
    expect(genDiff(json1, json2, 'plain')).toBe(plainResult);
  });

  test('YAML diff test', () => {
    expect(genDiff(yaml1, yaml2, 'plain')).toBe(plainResult);
  });

  test('YAML to JSON diff test', () => {
    expect(genDiff(yaml1, json2, 'plain')).toBe(plainResult);
  });

  test('JSON to YAML diff test', () => {
    expect(genDiff(json1, yaml2, 'plain')).toBe(plainResult);
  });
});
