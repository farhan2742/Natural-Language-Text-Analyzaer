import { handleSubmit } from '../src/client/js/formHandler'


describe('Tests that the function "handleSubmit()" is declared' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Tests that the function "handleSubmit()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});