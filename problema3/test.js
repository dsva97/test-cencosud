const isStringBalanced = require(".");

const samples = [
  { data: ") Esto no es un string balanceado", expected: false },
  { data: "(((hola)))", expected: true },
  { data: "())(", expected: false },
  { data: "Esto es un string balanceado (aparentemente)", expected: true },
];

const test = () => {
  const isSucessAllTests = samples
    .map((sample, index) => {
      const { data, expected } = sample;
      const result = isStringBalanced(data);
      const isMatch = result === expected;
      const msgResult = isMatch ? "Success" : "FAILED";

      console[isMatch ? "log" : "warn"](`TEST ${index + 1}: ${msgResult}`);

      if (!isMatch) {
        console.warn("Entry: ", data);
        console.warn("Output: ", result);
        console.warn("Expected: ", expected);
      }
      console.log("\n");
      return isMatch;
    })
    .every((result) => result);

  console.log(
    "FINAL RESULT: ",
    isSucessAllTests ? "-- SUCCESS --" : "-- FAILED --"
  );
};

test();
