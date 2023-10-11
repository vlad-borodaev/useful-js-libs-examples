// For older Node.js versions which don't support currenr EcmaScript specifications

const fs = require("mz/fs");

fs.exists(__filename)
    .then((exists) => {
        if (exists) {
            console.debug("Exists!")
        }
    });


const exec = require("mz/child_process").exec;

exec("node -v")
    .then((stdout) => console.info(stdout));

