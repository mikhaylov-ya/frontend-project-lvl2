import format from '../formatters/index.js';
import buildDiffTree from './buildDiffTree.js';

const genDiff = (firstObject, secondObject, formatName = 'stylish') => {
  const diffTree = buildDiffTree(firstObject, secondObject);
  return format(diffTree, formatName);
};

export default genDiff;
