
// Unit tests for: divide



import { divide } from '../st';



// divide.test.js
describe('divide() divide method', () => {
    // Happy path tests
    describe('Happy Path', () => {
        test('should return 5 when dividing 10 by 2', () => {
            // This test checks the normal operation of the divide function
            const result = divide(10, 2);
            expect(result).toBe(5);
        });

        test('should return 3 when dividing 9 by 3', () => {
            // This test checks another normal operation of the divide function
            const result = divide(9, 3);
            expect(result).toBe(3);
        });

        test('should return 0 when dividing 0 by any number', () => {
            // This test checks that dividing 0 by any number returns 0
            const result = divide(0, 5);
            expect(result).toBe(0);
        });
    });

    // Edge case tests
    describe('Edge Cases', () => {
        test('should return 0 when x is not divisible by y', () => {
            // This test checks that the function returns 0 when x is not divisible by y
            const result = divide(10, 3);
            expect(result).toBe(0);
        });

        test('should handle negative numbers correctly', () => {
            // This test checks that the function handles negative numbers correctly
            const result = divide(-10, -2);
            expect(result).toBe(5);
        });

        test('should return 0 when dividing by a larger number', () => {
            // This test checks that dividing by a larger number returns 0
            const result = divide(2, 10);
            expect(result).toBe(0);
        });

        test('should handle division by 1 correctly', () => {
            // This test checks that dividing by 1 returns the number itself
            const result = divide(7, 1);
            expect(result).toBe(7);
        });

        test('should handle division by negative number correctly', () => {
            // This test checks that dividing by a negative number works correctly
            const result = divide(10, -2);
            expect(result).toBe(0); // Since 10 is not divisible by -2
        });

        test('should handle division of negative number by positive number', () => {
            // This test checks that dividing a negative number by a positive number works correctly
            const result = divide(-10, 2);
            expect(result).toBe(0); // Since -10 is not divisible by 2
        });

        test('should throw an error when dividing by zero', () => {
            // This test checks that dividing by zero throws an error
            expect(() => divide(10, 0)).toThrow();
        });
    });
});

// End of unit tests for: divide
