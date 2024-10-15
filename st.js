/**
 * st
 */
// Function to divide two numbers
function divide(x, y) {
    let count = 0;  // Initialize count

    // Check if x is divisible by y
    if (x % y === 0) {
        while (x - y !== 0) {
            x = x - y;  // Subtract y from x
            count += 1;  // Increment the count
        }
    }

    return count;
}

// Main code
let x = 10;
let y = 2;
let ans = divide(x, y);

console.log(ans);  // This will print 4 to the console