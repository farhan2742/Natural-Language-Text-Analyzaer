import { entityExtract } from '../src/client/js/entityExtract'


describe('Tests that the function "entityExtract()" is declared' , () => {
    test('It should return true', async () => {
        expect(entityExtract).toBeDefined();
    });
});

describe('Tests that the function "entityExtract()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof entityExtract).toBe("function");
    });
});