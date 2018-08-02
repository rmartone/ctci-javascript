
/**
 * Determine if a string an ASCII has all unique characters.
 * @param str a valid ASCII string
 * @return true if the string has all unique chars otherwise false
 */
export function hasUniqueChars(str) {
  // ASCII string longer than 128 has dups
  if (str.length > 128) {
    return false;
  }
  // Set makes this easy 😀
  return new Set(str).size == str.length;
}

// same as above but without data-structures
export function hasUniqueCharsNoDataStructs(str) {
  // ASCII string longer than 128 has dups
  if (str.length > 128) {
    return false;
  }

  // O(n2) when banning use of hash or array etc
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}
