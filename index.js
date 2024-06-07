// Import necessary modules
const util = require('util');
const fs = require('fs');

// Promisify the fs functions
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Async function to process files
async function processFiles() {
    try {
        // Read file asynchronously
        const data = await readFile('input.txt', 'utf8');

        // Write file asynchronously
        await writeFile('output.txt', data);

        // Log success message
        console.log('File written successfully');
    } catch (err) {
        // Handle errors
        console.error('Error:', err);
    }
}

// Run the async function
processFiles();
