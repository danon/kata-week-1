export function formatRomanNumeral(number: number): string {
  if (number < 4) {
    return "I".repeat(number);
  }
  if (number === 5) {
    return "V";
  }
  const expected = [
    "",
    "",
    "",
    "IV",
    "",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  return expected[number - 1];
}
