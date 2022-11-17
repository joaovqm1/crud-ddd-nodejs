import { StringUtilitiesImpl } from "./string.utilities";

describe("String Utilities", function () {
  const stringUtilities = new StringUtilitiesImpl();

  test("should return a random string", () => {
    expect(typeof stringUtilities.createRandomUUID()).toBe("string");
  });
});
