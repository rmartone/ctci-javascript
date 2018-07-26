
export function isPermutation(s1, s2) {
  return s1.length === s2.length ? objectsEqual(toMap(s1), toMap(s2)) : false;
}

function toMap(s) {
  const map = {};
  for (let ch of s) {
    map[ch] = ++map[ch] || 1;
  }
  return map;
}

function objectsEqual(o1, o2) {
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys2) {
    if (o1[key] !== o2[key]) {
      return false;
    }
  }

  return true;
}
