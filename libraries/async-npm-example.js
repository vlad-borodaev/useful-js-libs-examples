const asyncs = require("async");

asyncs.eachSeries(hugeArray, function iteratee(item, callback) {
    if (inCache(item)) {
        // if many items are cached, you'll overflow
        // callback(null, cache[item]);
        // so
        asyncs.setImmediate(function() {
            callback(null, cache[item]);
        });
    } else {
        doSomeIO(item, callback);
    }
});
