import yaml from 'js-yaml';

const parseExtension = (file, extension) => {
  switch (extension) {
    case 'yaml':
    case 'yml':
      return yaml.load(file);
    case 'json':
      return JSON.parse(file);
    default:
      throw new Error(`extension ${extension} is not supported`);
  }
};

export default parseExtension;
