const n = parseInt(process.argv[2]);
const p = parseInt(process.argv[3]);
const q = parseInt(process.argv[4]);

const watson = (n, p, q) => {
  // Error handling
  if (isNaN(n) || isNaN(p) || isNaN(q)) {
    console.log("Not a number");
  } else if (n <= 1) {
    console.log("N needs to be a positive number");
  } else if (p == q) {
    console.log("P and Q can't be the same number");
  } else if (p <= 1 || p >= 10 || q <= 1 || q >= 10) {
    console.log("P and Q have to be single digit numbers greater than 1");
  } else {
    // String generation
    let string = "";

    for (let i = 1; i <= n; i++) {
      const includesChar = (index, num) => {
        // Checking if index includes num
        return !index.toString().includes(num.toString());
      };
      if (
        i % p === 0 &&
        i % q === 0 &&
        includesChar(i, p) &&
        includesChar(i, q)
      ) {
        string += "WATSON ";
      } else if (i % p === 0 && includesChar(i, p)) {
        string += "WAT ";
      } else if (i % q === 0 && includesChar(i, q)) {
        string += "SON ";
      } else {
        string += `${i} `;
      }
    }
    console.log(string.toUpperCase().trim());
  }
};

watson(n, p, q);
