export function formatRomanNumeral(number: number): string {
  if (number >= 10) {
    return formatRomanNumeral(Math.floor(number / 10))
      .replaceAll('X', 'C')
      .replaceAll('I', 'X')
      .replaceAll('V', 'L');
  }
  const expected = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return expected[number];
}
