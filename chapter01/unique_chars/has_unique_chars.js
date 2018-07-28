
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
  return new Set(str).size == str.length;
}

// same as above but without using Set
export function hasUniqueCharsNoDataStructs(str) {
  if (str.length > 128) {
    return false;
  }

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}
