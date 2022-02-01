import yaml from 'js-yaml';
import * as fs from 'fs';

const parseExtension = (file, extension) => {
  const readFile = fs.readFileSync(file, 'utf-8');
  if (extension === '.json') return JSON.parse(readFile);
  if (extension === '.yaml' || extension === '.yml') return yaml.load(readFile);
  throw new Error(`extension ${extension} is not supported`);
};

export default parseExtension;
