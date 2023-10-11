// Co-express allows to write express routes using generators 
const pathe = require("pathe");
const fs = require("mz/fs");

const express = require("express");
const wrap = require("co-express");

const app = express();

app.get("/", wrap(function* (req, resp) {
    const filePath = pathe.join(
        pathe.basename(process.cwd()),
        "..",
        "package.json"
    );
    const packageContent = yield fs.readFile(filePath, "utf-8");
    console.debug("packageContent", packageContent);
    resp.send(packageContent)
}));

app.listen(3000);