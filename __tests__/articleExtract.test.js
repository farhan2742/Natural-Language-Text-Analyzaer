import { articleExtract } from '../src/client/js/articleExtract'


describe('Tests that the function "articleExtract()" is declared' , () => {
    test('It should return true', async () => {
        expect(articleExtract).toBeDefined();
    });
});

describe('Tests that the function "articleExtract()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof articleExtract).toBe("function");
    });
});