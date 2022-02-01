import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

const getFormatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return toJson(tree);
    default:
      throw new Error(`Unexpected format: ${formatName}`);
  }
};

export default getFormatter;
