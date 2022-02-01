import isObject from '../auxiliary/isObject.js';

const stylish = (arr, replacer = ' ', count = 4) => {
  const iter = (currValue, depth = 1) => {
    const indentSize = depth * count;
    const indentForSign = replacer.repeat(indentSize - 2);
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - count);

    const genString = (indent, key, value, sign = '') => `${indent}${sign}${key}: ${isObject(value) ? iter(value, depth + 1) : value}`;

    const keyToString = (key, value, status = 'unchanged') => {
      switch (status) {
        case 'nested':
          return genString(currentIndent, key, iter(value, depth + 1));
        case 'deleted':
          return genString(indentForSign, key, value, '- ');
        case 'added':
          return genString(indentForSign, key, value, '+ ');
        case 'changed':
          return [
            genString(indentForSign, key, value[0], '- '),
            genString(indentForSign, key, value[1], '+ '),
          ].join('\n');
        case 'unchanged':
          return genString(currentIndent, key, value);
        default:
          throw new Error(`Wrong diff status: ${status}`);
      }
    };

    if (isObject(currValue)) {
      const nestedObj = Object.entries(currValue).map(([key, value]) => keyToString(key, value));
      return ['{', ...nestedObj, `${bracketIndent}}`].join('\n');
    }

    const lines = currValue.map(({ key, children, type }) => keyToString(key, children, type));

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(arr);
};

export default stylish;
