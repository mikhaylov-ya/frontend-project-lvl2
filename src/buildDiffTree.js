import _ from 'lodash';

const buildDiffTree = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const checkDiff = (key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        key, children: buildDiffTree(obj1[key], obj2[key]), type: 'nested',
      };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) return { key, children: obj1[key], type: 'deleted' };

    if (!_.has(obj1, key) && _.has(obj2, key)) return { key, children: obj2[key], type: 'added' };

    if (obj1[key] !== obj2[key]) return { key, children: [obj1[key], obj2[key]], type: 'changed' };

    return { key, children: obj1[key], type: 'unchanged' };
  };
  return sortedKeys.map(checkDiff);
};

export default buildDiffTree;
