const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("Error:", err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is result: ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log("error:", err);
          return;
        }
        console.log("done task");
      }
    );
  });
});
console.log("starting next task");
