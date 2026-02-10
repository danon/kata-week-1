export function formatRomanNumeral(number: number): string {
  const digitCodes = [
    "",
    "1",
    "11",
    "111",
    "15",
    "5",
    "51",
    "511",
    "5111",
    "110",
  ];
  let output = format(digitCodes[number % 10], "I", "V", "X");
  if (number >= 10) {
    output = format(digitCodes[Math.floor(number / 10)], "X", "L", "C") + output;
  }
  return output;
}

function format(digitCode: string, one: string, five: string, ten: string): string {
  return digitCode
    .replaceAll("10", ten)
    .replaceAll("5", five)
    .replaceAll("1", one);
}
