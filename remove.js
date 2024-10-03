const fs = require('fs');
const path = require('path');


const logsDirName = process.argv[2] || 'Logs'; // Default to 'Logs' if no name is provided
const logsDir = path.join(__dirname, logsDirName);


const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath); 
        });

   
        fs.rmdirSync(logsDir);
        console.log(`${logsDirName} directory deleted.`);
    } else {
        console.log(`${logsDirName} directory does not exist.`);
    }
};

console.log(removeLogs());
