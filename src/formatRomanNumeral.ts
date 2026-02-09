export function formatRomanNumeral(number: number): string {
  return !Boolean(number % 2 === 0) ? "I" : "II";
}
