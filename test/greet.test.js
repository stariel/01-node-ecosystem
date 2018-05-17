const greet = require('../lib/greet.js')

describe('greet module', () => {
    it('should return null when passed something other than a string', () => {
        expect(greet()).toBeNull();
    })

    it('should return "Hello, Brian" when passed Brian', () => {
        expect(greet('Brian')).toBe('Hello, Brian');
    }

    )
})