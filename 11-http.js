const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to hom page");
  }
  if (req.url === "/about") {
    res.end("about page");
  }
  res.end(
    `<h1> Oops!</h1><p>404 page not found</p><a href="/">bace to Home</a>`
  );
});

server.listen(5000);
