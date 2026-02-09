export function formatRomanNumeral(number: number): string {
  if (5 > number) {
    return "I".repeat(number);
  }
  return "V";
}
