/**
 * Generates a random number in the specified range
 * @param {number} min - the min value in the range
 * @param {number} max - the max value in the range
 * @return {number}
 * */
export function clampedRandom(min: number, max: number) {
  if (max < min) {
    [min, max] = [max, min];
  }

  if (min === max) return max;

  return Math.floor((Math.random() * (max - min)) + min);
}
