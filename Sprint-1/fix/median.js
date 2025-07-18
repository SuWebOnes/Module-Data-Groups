// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  if (!Array.isArray(list)) return null;
  const nums = list.filter(val => typeof val === 'number' && !isNaN(val));//Filter to keep only numeric values
   
  if (nums.length === 0) return null;  // If no valid numbers, return null

    // Clone and sort the array numerically
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

    // If odd, return the middle
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  return median;
}

module.exports = calculateMedian;
