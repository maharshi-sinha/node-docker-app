const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from Docker App (testing in EC2, now testing Jenkins webhooks in EC2)");
  res.end();
}).listen(3000);
