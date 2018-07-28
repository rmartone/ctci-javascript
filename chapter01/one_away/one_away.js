/**
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two valid strings, return true if they are one or fewer edits
 * away from one another.
 * @param {.} left string
 * @param {*} right string
 * @return true or false
 */
export function oneAway(left, right) {
  if (Math.abs(left.length - right.length) > 1) {
    return false;
  }

  for (
    let diff = 0, indexLeft = 0, indexRight = 0;
    indexLeft < left.length && indexRight < right.length;
    ++indexLeft, ++indexRight
  ) {
    if (left[indexLeft] !== right[indexRight]) {
      // is there more than one diff?
      if (++diff === 2) {
        return false;
      }

      if (left[indexLeft + 1] === right[indexRight]) {
        // char inserted in left string or removed from right
        ++indexLeft;
      } else if (left[indexLeft] === right[indexRight + 1]) {
        // char inserted in right string, or removed from left
        ++indexRight;
      }
    }
  }

  return true;
}
