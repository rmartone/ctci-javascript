
/**
 * Replace all spaces in a string with '%20.
 * @param str a valid string
 * @return str where spaces are replaced with %20
 */
export function URLify(str) {
  const array = [];
  for (let ch of str) {
    array.push(ch === ' ' ? '%20' : ch);
  }
  return array.join('');
}

// regex version
export function URLifyRegex(string) {
  return string.replace(/\s/g, '%20');
}
