const http = require('http');

const requestListener = async function (req, res) {
  console.log(req.url);
  const data = await fetch('https://www.nbrb.by' + req.url);

  res.writeHead(200);
  res.end(data);
};

const server = http.createServer(requestListener);
server.listen(8099);