
export function hasUniqueChars(str) {
  const len = str.length;

  if (len > 128) {
    return false;
  }

  return new Set(str).size == str.length;
}

export function hasUniqueCharsNoDataStructs(str) {
  const len = str.length;

  if (len > 128) {
    return false;
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}
