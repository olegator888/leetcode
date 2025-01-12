/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const lock = [];
  const unlock = [];

  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "0") {
      unlock.push(i);
    } else if (s[i] === "(") {
      lock.push(i);
    } else {
      if (lock.length > 0) lock.pop();
      else if (unlock.length > 0) unlock.pop();
      else return false;
    }
  }

  while (
    lock.length > 0 &&
    unlock.length > 0 &&
    lock[lock.length - 1] < unlock[unlock.length - 1]
  ) {
    lock.pop();
    unlock.pop();
  }

  return lock.length === 0 && unlock.length % 2 === 0;
};
