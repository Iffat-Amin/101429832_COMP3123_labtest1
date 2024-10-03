const fs = require('fs');
const path = require('path');


const logsDirName = process.argv[2] || 'Logs'; 
const logsDir = path.join(__dirname, logsDirName);


const createLogs = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(`${logsDirName} directory created.`);
    }

    
    process.chdir(logsDir);

   
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`Created file: ${fileName}`);
    }
};

console.log(createLogs());
