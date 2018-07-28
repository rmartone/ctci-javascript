/**
 * Performs basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed" string would not be smaller than the original,
 * return the original string.
 * @param {*} str a valid string
 * @return compressed string or original when it's shorter
 */
export function compress(str) {
  const compressed = [];
  let currentCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    ++currentCount;
    let currentChar = str[i];
    const nextIndex = i + 1;
    // are we at a new char or the end of string?
    if (nextIndex === str.length || currentChar !== str[nextIndex]) {
      compressed.push(currentChar);
      compressed.push(currentCount);
      currentCount = 0;
    }
  }
  // if the original string is shorter than the compressed return it
  return compressed.length < str.length ? compressed.join('') : str;
}
