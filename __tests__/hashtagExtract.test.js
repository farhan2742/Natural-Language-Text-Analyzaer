import { hashtagExtract } from '../src/client/js/hashtagExtract'


describe('Tests that the function "hashtagExtract()" is declared' , () => {
    test('It should return true', async () => {
        expect(hashtagExtract).toBeDefined();
    });
});

describe('Tests that the function "hashtagExtract()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof hashtagExtract).toBe("function");
    });
});