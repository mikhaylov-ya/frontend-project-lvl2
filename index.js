import _ from 'lodash';
import { extname } from 'path';
import parseExtension from './parser.js';
import getFormatter from './formatters/index.js';
import isObject from './auxiliary/isObject.js';

const buildDiffTree = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const checkDiff = (key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      return {
        key,
        children: buildDiffTree(obj1[key], obj2[key]),
        type: 'nested',
      };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return {
        key,
        children: obj1[key],
        type: 'deleted',
      };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return {
        key,
        children: obj2[key],
        type: 'added',
      };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key,
        children: [obj1[key], obj2[key]],
        type: 'changed',
      };
    }
    if (obj1[key] === obj2[key]) {
      return {
        key,
        children: obj1[key],
        type: 'unchanged',
      };
    }
    return null;
  };

  return sortedKeys.map(checkDiff);
};

const genDiff = (file1, file2, formatName = 'stylish') => {
  const firstObject = parseExtension(file1, extname(file1));
  const secondObject = parseExtension(file2, extname(file2));
  const diffTree = buildDiffTree(firstObject, secondObject);

  return getFormatter(diffTree, formatName);
};

export default genDiff;
