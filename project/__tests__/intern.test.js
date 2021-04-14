const Intern = require("../lib/intern");

describe("Tests to see if intern class exists", () => {
  it("should be an object", () => {
    const internObject = new Intern();
    expect(typeof internObject).toBe("object");
  });
});
