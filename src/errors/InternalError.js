const chalk = require("chalk")

class InternalError extends Error {
    /**
     * 
     * @param {string} error 
     */
    constructor(error) {
        super()
        console.log(chalk.red("              INTERNAL ERROR") + '\n' + chalk.red("--------------------------------------------") + "\n\n" + chalk.whiteBright(error))
    } 
}

module.exports = InternalError