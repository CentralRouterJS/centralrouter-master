const fs = require('fs'),
    path = require('path'),    
    serverlistPath = path.join(__dirname + '/public', 'serverlist.json');

module.exports = {
    readServers: function(callback) {
        fs.readFile(serverlistPath, "utf-8", ( err, serverlist ) => {
            if(err) throw err;

            return callback(serverlist);
        });
    },

    saveServers: function(servers) {
        fs.writeFile(serverlistPath, JSON.stringify(servers), "utf-8", function(err) {
            if (err) throw err;

            console.log("[UPDATE] The system has saved a new server!");
        });
    },
    
    deleteServer: function() {
        
    }
}