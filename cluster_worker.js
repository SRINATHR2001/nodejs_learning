const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
        console.log('Respawning a new worker');
        cluster.fork();
    });
} else {
    console.log(`Worker process ${process.pid} started`);

    const http = require('http');
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(3000);

    console.log(`Worker process ${process.pid} is listening on port 3000`);
}
