export function isRotation(str1, str2) {
  if (!str1 || !str2) {
    throw new Error('invalid string');
  }
  if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1 + str1, str2);
}

// isSubstring defined by question
function isSubstring(str, substr) {
  return str.includes(substr);
}
