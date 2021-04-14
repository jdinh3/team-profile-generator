const Manager = require("../lib/manager");

describe("Tests to see if manager class exists", () => {
  it("should be an object", () => {
    const managerObject = new Manager();
    expect(typeof managerObject).toBe("object");
  });
});
