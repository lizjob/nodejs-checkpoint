// Import file system module
const fs = require('fs');

// Create welcome.txt with content
const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('welcome.txt has been created successfully!');
});
