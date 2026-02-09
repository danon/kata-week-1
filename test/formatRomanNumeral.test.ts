import {expect, test} from 'vitest';
import {formatRomanNumeral} from '../src/formatRomanNumeral';

test("1 is I", () => {
  expect(formatRomanNumeral(1)).toBe("I");
});
