const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    fs.writeFile('output.txt', data, writeErr => {
        if (writeErr) {
            console.error('Error writing file:', writeErr);
            return;
        }
        console.log('File written successfully');
    });
});
