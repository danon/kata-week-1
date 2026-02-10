export function formatRomanNumeral(number: number): string {
  const expected = [
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

  let output = format(expected[number % 10], "I", "V", "X");

  if (number >= 10) {
    output = format(expected[Math.floor(number / 10)], "X", "L", "C") + output;
  }
  return output;
}

function format(code: string, one: string, five: string, ten: string): string {
  return code.replaceAll("10", ten).replaceAll("1", one).replaceAll("5", five);
}
