// Import the generate-password module
const generator = require('generate-password');

// Function to generate random password
function generateRandomPassword() {
    const password = generator.generate({
        length: 12,           // Length of password
        numbers: true,        // Include numbers
        symbols: true,        // Include symbols
        lowercase: true,      // Include lowercase letters
        uppercase: true,      // Include uppercase letters
        excludeSimilarCharacters: true  // Exclude similar characters like 0, O, l, I
    });
    
    return password;
}

// Generate and display password
const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);

// Generate multiple passwords
console.log('\nGenerating 5 random passwords:');
for (let i = 1; i <= 5; i++) {
    console.log(`${i}. ${generateRandomPassword()}`);
}
