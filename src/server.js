const http = require('http');
const app = require("./app");

const PORT = process.env.PORT || 8001;//making it dynamic with help of process

const server = http.createServer(app);

server.listen(PORT, console.log(`Server is running on port ${PORT}`));