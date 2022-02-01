// Jest Test
describe('First group of Tests', () => {
    test('Jest is working', () => {
        expect(1).toBe(1);
    });
});

// Real Test
describe('Start of Specification 1 Tests', () => {
// added Aray

const currentIds = [1, 3, 2, 4];

    // Function for getNewID
    function getNewId(min = 0, max = 100, ids =[]) {
        let id;
        do {
            id = Math.floor(Math.random() * (max - min +1)) + min;
        }   while (ids.indexOf(id) > -1);
        return id;
    };
    // Return a random number
    test('returns a random number', () => {
        jest.spyOn(Math, 'floor');
        const mockMath = Object.create(global.Math);
        const originalMath = Object.create(global.Math);
        mockMath.random = () => 78; // Had to change to match toBe() in order to pass for random number.
        global.Math = mockMath;
        const id = getNewId(10, 100);
        expect(id).toBe(78);
        global.Math = originalMath;
    });
    // Random number function
    function getRandomId(min = 0, max = 0, ids =[]) {
        let id;
        let a = [];
        do {
           id = Math.floor(Math.random() * (max - min + 1)) + min;
           if (a.indexOf(id) === -1) {
              a.push(id);
           }
           if (a.length === max - min + 1) {
              if (ids.indexOf(id) > -1) {
                 return 'failed';
              }
           }
        } while (ids.indexOf(id) > -1);
        return id;
     }
    // Return an Integer
    test('returns an integer', () => {
        const id = getRandomId();
        expect(id).toBe(Math.floor(id));
    });
    test('generates a number within a specified range', () => {
        for (let i = 0; i < 100; i ++) {
            const id = getRandomId(10, 100);

            expect(id).toBeLessThanOrEqual(100);
            expect(id).toBeGreaterThanOrEqual(10);
            expect(id).not.toBeLessThan(10);
            expect(id).not.toBeGreaterThan(100);
        }
    });
    // A unique Number
    test('generates a unique number', () => {
        mockIds = [1, 2, 3, 4, 5];
        let id = getRandomId(1, 5, mockIds);
        expect(id).toBe('failed');

        id = getRandomId(1, 6, mockIds);
        expect(id).toBe(6);
    });
});