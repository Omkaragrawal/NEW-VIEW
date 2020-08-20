const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');

const build = ora({
    text: "Building frontend",
    indent: 4
}).start("Building the UI");
const args = process.argv;

exec("npm run build", {env: {"SKIP_PREFLIGHT_CHECK": "true"}}, (error, stdout, stderr) => {
    if (error) {
        build.fail('Build failed');
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        build.fail('Build failed');
        console.log(`stderr: ${stderr}`);
        return;
    }
    build.succeed("Frontend build succeed");

    const move = ora({
        text: "Moving frontend",
        indent: 4
    }).start("Moving frontend");
    // console.log(`stdout: ${stdout}`);
    try{
    // fs.readdirSync(path.join(__dirname, "build")).forEach((object, index, str) => {
        fs.moveSync(path.join(__dirname, "build"), path.normalize(args[2]), {overwrite: true});
    // });
    } catch(err) {
        move.fail("Moving Failed");
        console.log(err);
    }
    move.succeed("Move Completed");
    ora({
        text: "Process Complete",
        indent: 0
    }).succeed("Process Complete");
});