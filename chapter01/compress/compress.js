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
