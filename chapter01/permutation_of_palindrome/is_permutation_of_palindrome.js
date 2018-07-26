export function isPermutationOfPalindrome(str) {
  // ignore whitespace and case
  const strCopy = str.replace(/[^\w]/g, '').toLowerCase();

  // build letter hash
  const map = {};
  for (let ch of strCopy) {
    map[ch] = ++map[ch] || 1;
  }

  // a permuation of a palindrome can have at most one odd letter count
  let counter = 0;
  for (let ch in map) {
    counter += map[ch] % 2;
  }

  // if true sum is 0 or 1
  return counter < 2;
}
