document.addEventListener("DOMContentLoaded", function(event) {
    var serverlistTable = document.getElementById("table");

    fetch('/api/v1/serverlist', {
        method: "GET"
    })
    .then(function(response) { return response.json(); })
    .then(function(serverlistData) {
        var i = 1;
        serverlistData.forEach(function(server) {
            var nrow = serverlistTable.insertRow(i);
            nrow.className = "centralrouter_data";

            var snameCell = nrow.insertCell(0);
            var latencyCell = nrow.insertCell(1);
            var servicesCell = nrow.insertCell(2);
            var countryCell = nrow.insertCell(3);

            snameCell.innerHTML = server.domainLink;
            latencyCell.innerHTML = "N/A";
            servicesCell.innerHTML = server.interfaces;
            countryCell.innerHTML = "N/A";

            i += 1;
        });
    });
});