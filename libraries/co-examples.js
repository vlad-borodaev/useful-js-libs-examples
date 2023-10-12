const co = require("co");

const logUncaughtErrors = (err) => console.error(err.stack);

co(function* () {
    const result = yield Promise.resolve(true);
    console.debug("result", result);
})
    .catch(logUncaughtErrors);

co(function* () {
    const result = yield [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(4),
    ];

    console.debug("result", result);
})
    .catch(logUncaughtErrors);

co(function* () {
    const result = yield {
        a: Promise.resolve(1),
        b: Promise.resolve(2),
        c: Promise.resolve(3),
    };

    console.debug("result", result);
})
    .catch(logUncaughtErrors);

co(function* () {
    try {
        yield Promise.reject(new Error("BANG!"));
    } catch (err) {
        console.error(err.message);
    }
})
    .catch(logUncaughtErrors);

co(function* () {
    return yield Promise.resolve(1);
})
    .then(console.debug)
    .catch(logUncaughtErrors);

const func = co(function* (val) {
    return yield Promise.resolve(val);
});

func("123")
    .then(console.debug)
    .catch(logUncaughtErrors);

