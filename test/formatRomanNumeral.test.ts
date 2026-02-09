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

test("Single digits", () => {
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
  const actual = [];
  for (let i = 1; i <= 10; i++) {
    actual.push(formatRomanNumeral(i));
  }
  expect(actual).toEqual(expected);
});
