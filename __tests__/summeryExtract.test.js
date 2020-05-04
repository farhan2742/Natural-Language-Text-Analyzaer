import { summaryExtract } from '../src/client/js/summeryExtract'


describe('Tests that the function "summaryExtract()" is declared' , () => {
    test('It should return true', async () => {
        expect(summaryExtract).toBeDefined();
    });
});

describe('Tests that the function "summaryExtract()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof summaryExtract).toBe("function");
    });
});
