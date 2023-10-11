const promisedValue = new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
        resolve(1);
        timer = null;
    }, 3000);
});

(async () => await promisedValue)();

process.on('uncaughtException', err => {
    console.info(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.info('Unhandled rejection at ', promise, `reason: ${reason.message}`);
    process.exit(1);
});

process.on('SIGTERM', signal => {
    console.info(`Process ${process.pid} received a SIGTERM signal`)
    process.exit(0);
});

process.on('SIGINT', signal => {
    console.info(`Process ${process.pid} has been interrupted`)
    process.exit(0);
});