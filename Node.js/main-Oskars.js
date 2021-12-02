
const [ log, error ] = require('./logger');
const os = require('os');
const fs = require('fs');

// log(`OS : ${os.platform()}`);
// log(`OS : ${os.type()}`);
// log(`OS : ${os.cpus()}`);

// Read from an existiing file 
fs.readFile('./documents/text1.txt', (err, data) => {
    if (err) {
        error(err.message);
    } else {
        log(data.toString());
    }
});

// Write to file, also creates file or overrwites existing content of file
fs.writeFile('./documents/text2.txt', 'Writing to file text2', () => {
    log('file was created');
});

// Appends text to existing file
fs.appendFile('./documents/text2.txt', '\nI am adding more text', () => {
    log('file was created');
});

// Do not try this create and remove one after the other
// Remove directory
// if (fs.existsSync('./assets')) {
//     fs.rmdir('./assets', err => {
//         if (err) {
//             error(err)
//         } else {
//             log(`Direcotory assets was creaeted`);
//         }
//     });
// }
//Create directory
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', err => {
        if (err) {
            error(err)
        } else {
            log(`Direcotory assets was creaeted`);
        }
    });
}

