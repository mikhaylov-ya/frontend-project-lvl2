import * as fs from 'fs';
import _ from 'lodash';

const readJSONfromFile = (file) => (JSON.parse(fs.readFileSync(file, 'utf-8')));

const getDiffToString = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const checkDiff = (key) => {
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    } if (!_.has(obj1, key) && _.has(obj2, key)) {
      return `  + ${key}: ${obj2[key]}`;
    } if (obj1[key] !== obj2[key]) {
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    } if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}`;
    }
    return 'Something went wrong';
  };
  const diffString = sortedKeys.map(checkDiff).join('\n');
  return `{\n${diffString}\n}`;
};

const genDiff = (file1, file2) => {
  const json1 = readJSONfromFile(file1);
  const json2 = readJSONfromFile(file2);
  return getDiffToString(json1, json2);
};

export default genDiff;
