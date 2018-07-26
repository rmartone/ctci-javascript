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
