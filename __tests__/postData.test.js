import { postData } from '../src/client/js/postData'


describe('Tests that the function "postData()" is declared' , () => {
    test('It should return true', async () => {
        expect(postData).toBeDefined();
    });
});

describe('Tests that the function "postData()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof postData).toBe("function");
    });
});