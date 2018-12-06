const ps = require('ps-node');

const getProcesses = async () => {
    let result = [];

    await ps.lookup({}, (error, resultList) => {
        if (error) {
            throw new Error(error);
        }

        resultList.forEach(process => {
            if (!process) {
                return;
            }

            let command = process.command;

            if (process.arguments) {
                process.arguments.forEach(
                    arg => (command += ` ${arg.toString()}`)
                );
            }

            result.push({ pid: process.pid, name: command });

            return result;
        });
    });

    return result;
};

var r = getProcesses();
var t = 1;
