/**
 * Given two valid strings, decide if one is a permutation of the other.
 * @param s1 string
 * @param s2 string
 * @return true or false
 */
export function isPermutation(s1, s2) {
  // if string lengths differ, then not a permutation; otherwise,
  // compare a map of both strings
  return s1.length === s2.length ? isEqual(toMap(s1), toMap(s2)) : false;
}

// transform string to a map
function toMap(s) {
  const map = {};
  for (let ch of s) {
    map[ch] = ++map[ch] || 1;
  }
  return map;
}

// are two objects equal
function isEqual(o1, o2) {
  // arrays for property names
  const keys1 = Object.getOwnPropertyNames(o1);
  const keys2 = Object.getOwnPropertyNames(o2);

  // if number of props differ objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys2) {
    // if values for a key differ objects are not equal
    if (o1[key] !== o2[key]) {
      return false;
    }
  }

  return true;
}
