//require http, it's used to create the server and listen to request
import http from 'http';
import app from './app';
const port = process.env.PORT || 5000;

//app will serve as the http request interceptor (handler)
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server is running on port', port);
});
