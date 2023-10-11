const simpleGit = require("simple-git");

/**
 * SimpleGit type
 * @typedef SimpleGitOptions
 * @property {string|undefined} baseDir - Base directory
 * @property {string|undefined} binary - Command to run
 * @property {number} maxConcurrentProcesses
 * @property {boolean} trimmed
 */

/** @type {SimpleGitOptions} */
const options = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
};

const git = simpleGit(options);

const run = async () => {
    const history = await git.log();
    console.info("git log", history);

    const currBranch = await git.branch();
    console.info("git branch", currBranch);

    const remote = await git.remote("-v");
    console.info("git remote", remote);

    const pushResults = await git.push();
    console.debug("git push", pushResults);
};

run();