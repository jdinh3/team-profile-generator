// Arrange Act Assert

// when you create a test, the focus is to test Functionality
// unit test

const Algo = require("../index");

describe("string reversal", () => {
  describe("did it reverse", () => {
    it("should reverse a given string"),
      () => {
        // arrange
        // where you set your variables
        const inputVariable = "hello";
        const outputVariable = "olleh";
        // act
        const theObjectItself = new index();
        const result = theObjectItself.reverse(inputVariable);

        // assert
        expect(result).toEqual(outputVariable);
      };
  });
});
