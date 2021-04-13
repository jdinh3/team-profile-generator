// We set up our test by importing in the files we're testing for.
const Employee = require("../lib/employee");

// construct the test
describe("Tests to see if employee class exists", () => {
  it("should be an object", () => {
    //Arrange
    //I don't really have something to compare to
    //Act
    const employeeObject = new Employee();
    //assert
    expect(typeof employeeObject).toBe("object");
  });

  it("should take in a name", () => {
    // Arrange
    const name = "Jules";
    // Act
    const employeeObject = new Employee("Jules");
    // Assert
    expect(employeeObject.name).toBe(name);
  });
});
