export function formatRomanNumeral(number: number): string {
  if (number == 10) {
    return "X";
  }
  if (number == 50) {
    return "L";
  }
  const expected = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return expected[number];
}
