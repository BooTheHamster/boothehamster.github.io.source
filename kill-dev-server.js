const psList = require('ps-list');
 
(async () => {
    let processes = await psList();
})();