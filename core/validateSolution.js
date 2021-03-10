const allowedMoves = [
  "R", "R'", "R2", "Rw", "Rw'", "Rw2",
  "L", "L'", "L2", "Lw", "Lw'", "Lw2",
  "F", "F'", "F2", "Fw", "Fw'", "Fw2",
  "B", "B'", "B2", "Bw", "Bw'", "Bw2",
  "U", "U'", "U2", "Uw", "Uw'", "Uw2",
  "D", "D'", "D2", "Dw", "Dw'", "Dw2",
  "x", "x'", "x2", "X", "X'", "X2",
  "y", "y'", "y2", "Y", "Y'", "Y2",
  "z", "z'", "z2", "Z", "Z'", "Z2",
];

const allowedMovesHashMap = Object.fromEntries(
  allowedMoves.map(entry => [entry, true])
);

/**
 * Interates through an array of moves and validates each move
 * against the allowed moves hashmap.
 * 
 * If a value fails the validation, the index and the move
 * that failed are collected and returned thorugh an iterator.
 *
 * @param {string[]} moves
 */
function* findInvalidMoves(moves) {
  let index = 0;
  for (let move of moves) {
    if (!allowedMovesHashMap[move]) {
      yield {
        index,
        move
      };
    }
    index++;
  };
}

/**
 * Validates an incoming solution according to the WCA
 * standard.
 *
 * @export
 * @param {string} solution
 * @returns {Object} an object holding whether the
 * element was valid (isValid), whether the element was
 * too long (isTooLong) and which moves were invalid
 * (invalidElements).
 * 
 * Each invalidElements item holds an index key and
 * a move representing the move that failed the
 * validation and the index where the validation
 * failed (array-based index, excluding trims and newlines).
 */
export default function validateSolution(solution) {
  const result = {
    isValid: true,
    isTooLong: false,
    invalidElements: []
  };
  const moves = solution
    .replaceAll('\r\n', ' ')
    .replaceAll('\n', ' ')
    .trim()
    .split(" ") ?? [];
  if (moves.length > 80) {
    result.isValid = false;
    result.isTooLong = true;
  }
  for (let { move, index } of findInvalidMoves(moves)) {
    result.invalidElements.push({
      move,
      index
    });
    result.isValid = false;
  }
  return result;
}