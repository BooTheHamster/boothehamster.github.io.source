const psNode = require('ps-node');

function getProcesses(processFilter) {
    return new Promise(resolve => {
        psNode.lookup({}, (error, allProcesses) => {
            var filteredProcesses = [];

            allProcesses.forEach(process => {
                if (
                    !process ||
                    typeof process.command === 'undefined' ||
                    !process.command
                ) {
                    return;
                }

                let command = process.command;

                if (process.arguments) {
                    process.arguments.forEach(
                        arg => (command += ` ${arg.toString()}`)
                    );
                }

                const processInfo = { pid: process.pid, command: command };

                if (processFilter(processInfo) === false) {
                    return;
                }

                filteredProcesses.push(processInfo);
            });

            resolve({ processes: filteredProcesses, error: error });
        });
    });
}

findAndKillProcesses = async () => {
    const result = await getProcesses(process => {
        return process.command.includes('ng serve') || process.command.includes('webpack-dev-server');
    });

    if (result.error) {
        throw new Error(error);
    }

    result.processes.forEach(process => {
        console.log(`Kill: ${process.pid} ${process.command}`)
        psNode.kill(process.pid);
    })   
};

findAndKillProcesses();
