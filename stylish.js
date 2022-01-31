const stringify = (arr, replacer = ' ', count = 4) => {
  const iter = (currValue, depth = 1) => {
    // console.dir(currValue, { depth: 10 });

    const indentSize = depth * count;
    const indentForSign = replacer.repeat(indentSize - 2);
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - count);

    const genString = (indent, key, value, sign = '') => `${indent}${sign}${key}: ${value}`;
    // const isObject = (val) => (typeof val === 'object' && !Array.isArray(val));

    const keyToString = (key, value, status) => {
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
          throw new Error('Status is wrong');
      }
    };

    // if (!_.isObject(currValue)) return keyToString(currValue);

    const entryToString = currValue
      .map(({ key, children, type }) => keyToString(key, children, type));

    return ['{', ...entryToString, `${bracketIndent}}`].join('\n');
  };
  return iter(arr);
};

export default stringify;
