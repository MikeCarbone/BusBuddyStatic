const fetch = require("node-fetch");
const fs = require('fs');

var url = 'https://serene-oasis-62993.herokuapp.com/api/buddies/data';

let rawdata = fs.readFileSync('./route_middleschool.json');
let route_middleschool = JSON.parse(rawdata);

function renderInfo(data) {
    var counter = 0;
    var i = setInterval(function () {

        console.log('Latitude:', data[counter].x);
        console.log('Longitude:', data[counter].y);
        PAYLOAD = {
            "data": {
                "x": data[counter].x,
                "y": (data[counter].y)
            }
        }
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(PAYLOAD),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(response => response.json())
            .then(data => console.log('This is the response: ', JSON.stringify(data)))
            .catch(err => console.log('Error:', err));
            
        counter++;
        if (counter === data.length) {
            clearInterval(i);
        }
    }, 1000);
}

renderInfo(route_middleschool);