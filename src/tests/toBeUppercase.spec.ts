import * as MRHGenerator from "..";
import { describe, expect, it } from "@jest/globals";

describe("Uppercase Validator", () => {
  const constraints = MRHGenerator.iWantRegex().toBeUppercase().end();

  it("Should succeed", () => {
    const validItems = ["HELLO", "HTTP://LOCALHOST:3000"];
    validItems.forEach((validItem) => {
      expect(constraints.test(validItem)).toBe(true);
    });
  });

  it("Should fail", () => {
    const invalidItems = ["HELLo", "I Am"];
    invalidItems.forEach((invalidItem) => {
      if (constraints.test(invalidItem)) console.log(invalidItem);
      expect(constraints.test(invalidItem)).toBe(false);
    });
  });
});
