
export function hasUniqueChars(str) {
  if (str.length > 128) {
    return false;
  }

  return new Set(str).size == str.length;
}

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
