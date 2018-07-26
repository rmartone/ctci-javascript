
export function URLifyRegex(string) {
  return string.replace(/\s/g, '%20');
}

export function URLify(str) {
  const array = [];
  for (let ch of str) {
    array.push(ch === ' ' ? '%20' : ch);
  }
  return array.join('');
}
