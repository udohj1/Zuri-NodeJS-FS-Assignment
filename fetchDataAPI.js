const fs = require('fs');
const fetch = require('node-fetch');


fetch('http://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    fs.writeFile('./result/posts.json', JSON.stringify(myJson), 'utf8', (err) => {
        if (err) throw err;
        console.log('a JSON file was created.')
    });
  });


