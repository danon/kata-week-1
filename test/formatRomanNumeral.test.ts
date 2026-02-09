import { expect, test } from "vitest";
import { formatRomanNumeral } from "../src/formatRomanNumeral";

test("1 is I", () => {
  expect(formatRomanNumeral(1)).toBe("I");
});

test("2 is II", () => {
  expect(formatRomanNumeral(2)).toBe("II");
});

test("3 is III", () => {
  expect(formatRomanNumeral(3)).toBe("III");
});
