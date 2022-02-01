const isObject = (val) => (typeof val === 'object' && !Array.isArray(val) && val !== null);

export default isObject;
