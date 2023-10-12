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
    try {
        const initRepoResult = await git.init();
        console.info("git init", initRepoResult);

        const repoUrl = "git@github.com:vlad-borodaev/useful-js-libs-examples.git"
        const addOriginResult = await git.addRemote("origin", repoUrl);
        console.info("git remote add origin ...", addOriginResult);

        const history = await git.log();
        console.info("git log", history);

        const currBranch = await git.branch();
        console.info("git branch", currBranch);

        const remote = await git.remote("-v");
        console.info("git remote", remote);

        const pushResults = await git.push();
        console.debug("git push", pushResults);
    } catch (err) {
        console.error(err);
    }
};

run();