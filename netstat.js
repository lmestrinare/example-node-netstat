const netstat = require('node-netstat');

module.exports = netstat_function =>
    new Promise((resolve, reject) => {
        const addresses = [];
        netstat(
            {
                done: err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(addresses);
                },
                filter: {
                    protocol: 'tcp',
                    local: {
                        port: 3050
                    },
                    state: "ESTABLISHED"
                }
            },
            n => {
                addresses.push(n);
            }
        );
    });