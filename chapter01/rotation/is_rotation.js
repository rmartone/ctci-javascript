/**
 * Given two strings, 51 and 52, write code to check if 52 is a rotation
 * of 51 (e.g., Uwaterbottleuis a rotation ofuerbottlewatU).
 * Assume you have a method isSubstring which checks if one word is a
 * substring of another.
 * @param {*} str1 valid string
 * @param {*} str2 valid string
 * @return true if one string is a rotation of the other
 */
export function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1 + str1, str2);
}

// isSubstring defined by question
function isSubstring(str, substr) {
  return str.includes(substr);
}
