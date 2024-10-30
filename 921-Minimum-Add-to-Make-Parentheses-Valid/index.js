// total sam

var minAddToMakeValid = function (s) {
  let invalidClosing = 0;
  let invalidOpening = 0;

  for (const c of s) {
    if (c === "(") {
      invalidOpening += 1;
    } else {
      if (invalidOpening > 0) {
        invalidOpening -= 1;
      } else {
        invalidClosing += 1;
      }
    }
  }

  return invalidClosing + invalidOpening;
};
