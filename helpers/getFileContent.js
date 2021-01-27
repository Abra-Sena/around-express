const fs = require('fs').promises;

function getFileContent(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => {
      console.log({ message: 'Requested resource not found' });
      throw new Error(err);
    });
}

module.exports = getFileContent;
