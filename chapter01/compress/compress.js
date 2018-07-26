export function compress(str) {
  const compressed = [];
  const len = str.length;
  let count = 0;
  for (let i = 0; i < len; i += 1) {
    ++count;
    let currentChar = str[i];
    const nextChar = i + 1;
    if (nextChar === len || currentChar !== str[nextChar]) {
      compressed.push(currentChar);
      compressed.push(count);
      count = 0;
    }
  }
  return compressed.length < len ? compressed.join('') : str;
}
