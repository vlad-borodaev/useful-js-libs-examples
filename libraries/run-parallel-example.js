const parallel = require("run-parallel");

parallel([
    (callback) => {
        setTimeout(() => {
            callback(null, "one");
        }, 200);
    },
    (callback) => {
        setTimeout(() => {
            callback(null, "two");
        }, 100);
    },
    // optional
    (err, result) => {
        if (err) {
            console.error(err);
        }
        if (result) {
            console.info(result);
        }
    }
]);