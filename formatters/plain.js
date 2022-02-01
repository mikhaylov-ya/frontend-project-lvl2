import { isObject } from '../index.js';

const getValue = (val) => {
  if (isObject(val)) return '[complex value]';
  if (typeof val === 'string') return `'${val}'`;
  return val;
};

const plain = (tree) => {
  const iter = (node, path = []) => {
    const keyToString = (key, children, status = 'unchanged') => {
      const newPath = [...path, key];
      const propertyName = newPath.join('.');

      switch (status) {
        case 'nested':
          return iter(children, newPath);
        case 'deleted':
          return `Property '${propertyName}' was removed`;
        case 'added':
          return `Property '${propertyName}' was added with value: ${getValue(children)}`;
        case 'changed':
          return `Property '${propertyName}' was updated. From ${getValue(children[0])} to ${getValue(children[1])}`;
        default:
          return [];
      }
    };
    const lines = node.flatMap(({ key, children, type }) => keyToString(key, children, type));
    return lines.join('\n');
  };
  return iter(tree);
};

export default plain;
