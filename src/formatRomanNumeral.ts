export function formatRomanNumeral(number: number): string {
  const expected = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let output = expected[number % 10];

  if (number >= 10) {
    output =
      expected[Math.floor(number / 10)]
        .replaceAll("X", "C")
        .replaceAll("I", "X")
        .replaceAll("V", "L") + output;
  }
  return output;
}
