#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, function (error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        const characters = JSON.parse(body).characters;
        printName(characters);
    } else {
        console.log('error');
    }
});

// function printCharacters (characters, index) {
//   request(characters[index], function (error, response, body) {
//     if (!error) {
//       console.log(JSON.parse(body).name);
//       if (index + 1 < characters.length) {
//         printCharacters(characters, index + 1);
//       }
//     }
//   });
// }
function printName (arr) {
  for (let i = 0; i < arr.length; i++) {
    request(arr[i], function (error, response, body) {
      if (!error) {
        console.log(JSON.parse(body).name);
      }
    });
  }
}