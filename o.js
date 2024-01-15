const { spawn } = require('child_process');
const minecraftServer = spawn('java', ['-Xmx1024M', '-Xms1024M', '-jar', 'server.jar', 'nogui']);

minecraftServer.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

minecraftServer.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

minecraftServer.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
