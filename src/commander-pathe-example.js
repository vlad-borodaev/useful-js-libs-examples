const { Command } = require("commander");
const pathe = require("pathe");

const currentPath = pathe.basename(process.cwd());
console.info("current path", currentPath);

const program = new Command();

program
    .name("My CLI example")
    .description("Lorem ipsum dolor sit amet");

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse(process.argv);

const options = program.opts();
const limit = options.smth ? 1 : undefined;
const parsedOptions = (
    program.args[0] &&
    program.args[0].split(options.separator, limit)
);
console.debug("options", parsedOptions);

/*
> node src/commander-pathe-example.js -s / --fits a/b/c

current path yieldable-promisable-examples
error: unknown option '--fits'
(Did you mean --first?)
*/