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

describe("Multiples of 10", () => {
  const expected = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

  expected.forEach((expected, index) => {
    test("Multiple of 10 " + (index + 1), () => {
      expect(formatRomanNumeral((index + 1) * 10)).toEqual(expected);
    });
  });
});

test("50 is L", () => {
  expect(formatRomanNumeral(50)).toBe("L");
});
