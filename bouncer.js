const http = require('http');

const requestListener = async function (req, res) {
  console.log(req.url);
  const nbrbResponse = await fetch('https://www.nbrb.by' + req.url);
  const bodyText = await nbrbResponse.text();

  if (nbrbResponse.ok) {
    res.writeHead(200, {
      'Content-Length':	(new TextEncoder().encode('bodyText')).length,
      'Content-Type':	'application/json; charset=utf-8'
    });
    res.end(bodyText);
  } else {
    res.writeHead(500);
    res.end(nbrbResponse.statusText);
  }
};

const server = http.createServer(requestListener);
server.listen(8099);