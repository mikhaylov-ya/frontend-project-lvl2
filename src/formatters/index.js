import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Unexpected format: ${formatName}`);
  }
};

export default format;
