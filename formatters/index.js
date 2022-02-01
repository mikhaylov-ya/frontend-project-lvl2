import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

const getFormatter = (tree, formatName) => {
  if (formatName === 'stylish') return stylish(tree);
  if (formatName === 'plain') return plain(tree);
  if (formatName === 'json') return toJson(tree);
  return 'Unexpected format';
};

export default getFormatter;
