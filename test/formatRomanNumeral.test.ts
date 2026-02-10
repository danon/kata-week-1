import { describe, expect, test } from "vitest";
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

test("5 is V", () => {
  expect(formatRomanNumeral(5)).toBe("V");
});

describe("Single digits", () => {
  const expected = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];

  expected.forEach((expected, index) => {
    test("Single digit " + (index + 1), () => {
      expect(formatRomanNumeral(index + 1)).toEqual(expected);
    });
  });
});

test("50 is L", () => {
  expect(formatRomanNumeral(50)).toBe("L");
});
