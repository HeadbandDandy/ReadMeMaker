//constant below enables interaction with file system to create ReadMe

const fs = require('fs');


// function below create the file 
const writeFile = readMeContent => {
  return new promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', readMeContent, err => {
          if(err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'Awesome! Your Read.Me was created!'
          })
      })
  })
}

module.exports = {writeFile};