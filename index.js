import http from "http";

const port = process.env.PORT || 8080;

const requestListener = (req, res) => {
    if (req.method === "GET") {
        res.writeHead(200);
        res.end("Hello, World!");
    } else if (req.method === "POST") {
        res.writeHead(201);
        res.end("This is an API now!");
    }
};

const server = http.createServer(requestListener);
server.listen(8080, () =>
    console.log(`Server started listening on port ${port}`)
);
