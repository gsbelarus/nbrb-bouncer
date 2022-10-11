const http = require('http');

const requestListener = async function (req, res) {
  console.log(req.url);
  const data = await fetch('https://www.nbrb.by' + req.url);

  if (data.ok) {
    res.writeHead(200);
    res.end(await data.text());
  } else {
    res.writeHead(500);
    res.end(data.statusText);
  }
};

const server = http.createServer(requestListener);
server.listen(8099);