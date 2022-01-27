import yaml from 'js-yaml';
import * as fs from 'fs';

const parseExtension = (file, extension) => {
  const readFile = fs.readFileSync(file, 'utf-8');
  switch (extension) {
    case '.json':
      return JSON.parse(readFile);
    case '.yaml' || '.yml':
      return yaml.load(readFile);
    default:
      throw new Error(`extension ${extension} is not supported`);
  }
};

export default parseExtension;
