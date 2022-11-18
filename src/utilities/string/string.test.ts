import { StringUtilitiesImpl } from "./string.utilities";

describe("String Utilities", function () {
  test("should return a random string", () => {
    expect(typeof StringUtilitiesImpl.createRandomUUID()).toBe(
      "string",
    );
  });
});
