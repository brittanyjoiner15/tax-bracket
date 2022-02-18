export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export function percentage(number, fixed) {
  return parseFloat(number).toFixed(0) + "%";
}

export const taxBrackets = [
  {
    name: "Single",
    id: "single-bracket",
    brackets: [
      {
        name: "A",
        rate: 10,
        range: "$0 - $9,950",
        amountInRange: 9950,
      },
      {
        name: "B",
        rate: 12,
        range: "$9,951 - $40,525",
        amountInRange: 30574,
      },
      {
        name: "C",
        rate: 22,
        range: "$40,526 - $86,375",
        amountInRange: 45849,
      },
      {
        name: "D",
        rate: 24,
        range: "$86,376 - $164,925",
        amountInRange: 78549,
      },
      {
        name: "E",
        rate: 32,
        range: "$164,926 - $209,425",
        amountInRange: 44499,
      },
      {
        name: "F",
        rate: 35,
        range: "$209,426 - $523,600",
        amountInRange: 314174,
      },
      {
        name: "G",
        rate: 37,
        range: "$523,600 +",
        amountInRange: Infinity,
      },
    ],
  },
  {
    name: "Married",
    id: "married-bracket",
    brackets: [
      {
        name: "A",
        rate: 10,
        range: "$0 - $19,900",
        amountInRange: 19900,
      },
      {
        name: "B",
        rate: 12,
        range: "$19,901 - $81,050",
        amountInRange: 61149,
      },
      {
        name: "C",
        rate: 22,
        range: "$81,051 - $172,750",
        amountInRange: 91699,
      },
      {
        name: "D",
        rate: 24,
        range: "$172,751 - $329,850",
        amountInRange: 78549,
      },
      {
        name: "E",
        rate: 32,
        range: "$329,851 to $418,850",
        amountInRange: 88999,
      },
      {
        name: "F",
        rate: 35,
        range: "$418,851 to $628,300",
        amountInRange: 209499,
      },
      {
        name: "G",
        rate: 37,
        range: "$628,301 +",
        amountInRange: Infinity,
      },
    ],
  },
  {
    name: "Married Filing Separately",
    id: "married-separately-bracket",
    brackets: [
      {
        name: "A",
        rate: 10,
        range: "$0 - $9,950",
        amountInRange: 9950,
      },
      {
        name: "B",
        rate: 12,
        range: "$9,951 - $40,525",
        amountInRange: 30574,
      },
      {
        name: "C",
        rate: 22,
        range: "$40,526 - $86,375",
        amountInRange: 45849,
      },
      {
        name: "D",
        rate: 24,
        range: "$86,376 - $164,925",
        amountInRange: 78549,
      },
      {
        name: "E",
        rate: 32,
        range: "$164,926 - $209,425",
        amountInRange: 44499,
      },
      {
        name: "F",
        rate: 35,
        range: "$209,426 - $314,150",
        amountInRange: 104724,
      },
      {
        name: "G",
        rate: 37,
        range: "$314,151 +",
        amountInRange: Infinity,
      },
    ],
  },
  {
    name: "Head of Household",
    id: "hoh-bracket",
    brackets: [
      {
        name: "A",
        rate: 10,
        range: "$0 to $14,200",
        amountInRange: 14200,
      },
      {
        name: "B",
        rate: 12,
        range: "$14,201 to $54,200",
        amountInRange: 39999,
      },
      {
        name: "C",
        rate: 22,
        range: "$54,201 to $86,350",
        amountInRange: 32149,
      },
      {
        name: "D",
        rate: 24,
        range: "$86,351 to $164,900",
        amountInRange: 78549,
      },
      {
        name: "E",
        rate: 32,
        range: "$164,901 to $209,400",
        amountInRange: 44499,
      },
      {
        name: "F",
        rate: 35,
        range: "$209,401 to $523,600",
        amountInRange: 314199,
      },
      {
        name: "G",
        rate: 37,
        range: "$523,601 +",
        amountInRange: Infinity,
      },
    ],
  },
];
