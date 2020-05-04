import { disableUrl, disableText } from '../src/client/js/disableFormInputs'


describe('Tests that the function "disableUrl()" is declared' , () => {
    test('It should return true', async () => {
        expect(disableUrl).toBeDefined();
    });
});

describe('Tests that the function "disableUrl()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof disableUrl).toBe("function");
    });
});


describe('Tests that the function "disableText()" is declared' , () => {
    test('It should return true', async () => {
        expect(disableText).toBeDefined();
    });
});

describe('Tests that the function "disableText()" is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof disableText).toBe("function");
    });
});