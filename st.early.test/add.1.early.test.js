
// Unit tests for: add



import { add } from '../st';



// Import the add function
describe('add() add method', () => {
    // Happy path tests
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

    // Edge case tests
    describe('Edge Cases', () => {
        test('should return 0 when adding 0 and a negative number', () => {
            // This test checks if the function correctly handles adding zero and a negative number.
            const result = add(0, -5);
            expect(result).toBe(0);
        });

        test('should return a large number when adding a large number and a small number', () => {
            // This test checks if the function correctly handles adding a large number and a small number.
            const result = add(1000000, 1);
            expect(result).toBe(1000001);
        });

        test('should return the same number when adding a number and 0', () => {
            // This test checks if the function correctly handles adding a number and zero.
            const result = add(7, 0);
            expect(result).toBe(7);
        });

        test('should handle adding two negative numbers', () => {
            // This test checks if the function correctly adds two negative numbers.
            const result = add(-3, -2);
            expect(result).toBe(-5);
        });

        test('should handle adding a negative number and a positive number resulting in zero', () => {
            // This test checks if the function correctly handles adding a negative and a positive number that result in zero.
            const result = add(-5, 5);
            expect(result).toBe(0);
        });
    });
});

// End of unit tests for: add
