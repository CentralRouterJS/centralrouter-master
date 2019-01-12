const express = require('express');
const app = express();
const server = require('http').createServer();
const io = require('socket.io')(server);

const manager = require('./serverlistmanager.js');

let serverList = [];
manager.readServers((callback) => {
    if(callback != "")
        serverList.push(callback);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
});
   
app.get('/api/v1/serverlist', (req, res) => {
    res.send(serverList);
});

io.on('connection', instance => {
    console.log("Connection established with the instance.");

    instance.on('publishdetails', data => { 
        serverList.push(data);
        manager.saveServers(serverList);
        console.log("Instance published it's details.");
    });

    instance.on('disconnect', () => { 
        
        console.log("Instance disconnected from the master server.");
     });
});

server.listen(14886);

app.listen(3000, () => {
    console.log("CentralRouter Master instance is started.");
});
