import _ from 'lodash';
import { extname } from 'path';
import parseExtension from './parser.js';
import stringify from './stylish.js';

const isObject = (key, obj) => (typeof obj[key] === 'object' && !Array.isArray(obj[key]));

const buildDiffTree = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const checkDiff = (key) => {
    if (isObject(key, obj1) && isObject(key, obj2)) {
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
  const diffStatusOfKeys = sortedKeys.map(checkDiff);

  return diffStatusOfKeys;
};

const genDiff = (file1, file2) => {
  const firstObject = parseExtension(file1, extname(file1));
  const secondObject = parseExtension(file2, extname(file2));
  const rawDiffs = buildDiffTree(firstObject, secondObject);
  // console.dir(rawDiffs, { depth: 10 });
  return stringify(rawDiffs);
};

export { buildDiffTree, isObject };
export default genDiff;
