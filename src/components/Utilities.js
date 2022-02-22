// this takes a number and returns it in pretty currency format
// thanks StackOverflow
export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// this function takes a number and returns it with a % and rounded
// also thanks StackOverflow
export function percentage(number) {
  return parseFloat(number).toFixed(0) + "%";
}

// these are hard coded versions of 2021 tax brackets
// each object contains the rates for each filing status
export const taxBrackets = [
  {
    name: "Single",
    id: "single-bracket",
    brackets: [
      {
        rate: 10,
        range: "$0 - $9,950",
        amountInRange: 9950,
      },
      {
        rate: 12,
        range: "$9,951 - $40,525",
        amountInRange: 30575,
      },
      {
        rate: 22,
        range: "$40,526 - $86,375",
        amountInRange: 45850,
      },
      {
        rate: 24,
        range: "$86,376 - $164,925",
        amountInRange: 78550,
      },
      {
        rate: 32,
        range: "$164,926 - $209,425",
        amountInRange: 44500,
      },
      {
        rate: 35,
        range: "$209,426 - $523,600",
        amountInRange: 314175,
      },
      {
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
        rate: 10,
        range: "$0 - $19,900",
        amountInRange: 19900,
      },
      {
        rate: 12,
        range: "$19,901 - $81,050",
        amountInRange: 61150,
      },
      {
        rate: 22,
        range: "$81,051 - $172,750",
        amountInRange: 91700,
      },
      {
        rate: 24,
        range: "$172,751 - $329,850",
        amountInRange: 78550,
      },
      {
        rate: 32,
        range: "$329,851 to $418,850",
        amountInRange: 89000,
      },
      {
        rate: 35,
        range: "$418,851 to $628,300",
        amountInRange: 209500,
      },
      {
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
        rate: 10,
        range: "$0 - $9,950",
        amountInRange: 9950,
      },
      {
        rate: 12,
        range: "$9,951 - $40,525",
        amountInRange: 30575,
      },
      {
        rate: 22,
        range: "$40,526 - $86,375",
        amountInRange: 45850,
      },
      {
        rate: 24,
        range: "$86,376 - $164,925",
        amountInRange: 78550,
      },
      {
        rate: 32,
        range: "$164,926 - $209,425",
        amountInRange: 44500,
      },
      {
        rate: 35,
        range: "$209,426 - $314,150",
        amountInRange: 104725,
      },
      {
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
        rate: 10,
        range: "$0 to $14,200",
        amountInRange: 14200,
      },
      {
        rate: 12,
        range: "$14,201 to $54,200",
        amountInRange: 40000,
      },
      {
        rate: 22,
        range: "$54,201 to $86,350",
        amountInRange: 32150,
      },
      {
        rate: 24,
        range: "$86,351 to $164,900",
        amountInRange: 78550,
      },
      {
        rate: 32,
        range: "$164,901 to $209,400",
        amountInRange: 44500,
      },
      {
        rate: 35,
        range: "$209,401 to $523,600",
        amountInRange: 314200,
      },
      {
        rate: 37,
        range: "$523,601 +",
        amountInRange: Infinity,
      },
    ],
  },
];
