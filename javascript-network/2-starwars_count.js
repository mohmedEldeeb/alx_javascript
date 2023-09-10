#!/usr/bin/node

const request = require('request');


const url =  process.argv[2];

request(url, function (error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        const films = JSON.parse(body).results;
        let n = 0;
        for (const film in films) {
            if (film.characters.includes('18')) {
                n++;
            }
        }
        console.log(n);
    } else {
        console.log('code: ' + response.statusCode);
    }
});