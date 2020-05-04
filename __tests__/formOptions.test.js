import { allowedFormOptions } from '../src/client/js/formOptions'


describe('Tests that the function "allowedFormOptions()" is declared' , () => {
    test('It should return true', async () => {
        expect(allowedFormOptions).toBeDefined();
    });
});

describe('Tests that the function "allowedFormOptions()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof allowedFormOptions).toBe("function");
    });
});