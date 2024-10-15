
// Unit tests for: add



import { add } from '../st';



// Import the add function
describe('add() add method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        test('should return 5 when adding 2 and 3', () => {
            // This test checks if the function correctly adds two positive numbers.
            const result = add(2, 3);
            expect(result).toBe(5);
        });

        test('should return 0 when adding 0 and 0', () => {
            // This test checks if the function correctly handles adding two zeros.
            const result = add(0, 0);
            expect(result).toBe(0);
        });

        test('should return -1 when adding -2 and 1', () => {
            // This test checks if the function correctly adds a negative and a positive number.
            const result = add(-2, 1);
            expect(result).toBe(-1);
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        test('should return 1 when adding 1 and 0', () => {
            // This test checks if the function correctly handles adding zero to a positive number.
            const result = add(1, 0);
            expect(result).toBe(1);
        });

        test('should return -2 when adding -2 and 0', () => {
            // This test checks if the function correctly handles adding zero to a negative number.
            const result = add(-2, 0);
            expect(result).toBe(-2);
        });

        test('should return 0 when adding 0 and 5', () => {
            // This test checks if the function correctly handles adding a positive number to zero.
            const result = add(0, 5);
            expect(result).toBe(5);
        });

        test('should return -5 when adding -5 and 0', () => {
            // This test checks if the function correctly handles adding zero to a negative number.
            const result = add(-5, 0);
            expect(result).toBe(-5);
        });

        test('should return 1000000 when adding 0 and 1000000', () => {
            // This test checks if the function correctly handles adding a large positive number to zero.
            const result = add(0, 1000000);
            expect(result).toBe(1000000);
        });

        test('should return -1000000 when adding -1000000 and 0', () => {
            // This test checks if the function correctly handles adding zero to a large negative number.
            const result = add(-1000000, 0);
            expect(result).toBe(-1000000);
        });
    });
});

// End of unit tests for: add
