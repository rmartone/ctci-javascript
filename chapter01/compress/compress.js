export function compress(str) {
  const compressed = [];
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    ++count;
    let currentChar = str[i];
    const nextChar = i + 1;
    if (nextChar === str.length || currentChar !== str[nextChar]) {
      compressed.push(currentChar);
      compressed.push(count);
      count = 0;
    }
  }
  return compressed.length < str.length ? compressed.join('') : str;
}
