const fs = require('fs');
const [ log, error ] = require('./logger');

// Prepares stream writer and reader to read and write file
const streamReader = fs.createReadStream('./assets/hugetext.txt');
const streamWriter = fs.createWriteStream('./assets/hugetextcopy.txt');

// Receives buffers from hugetxt and copies it to hugetextcopy
streamReader.on('data', buffer => {
    log(buffer.toString());
    streamWriter.write(buffer);
});