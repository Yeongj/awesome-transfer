const fs = require('fs');
const fsPromises = fs.promises;
const settings = require('./settings.json');

async function get() {
    try {
        return settings;
    } catch (err) {
        console.error('[ERROR] get settings.json error.', err);
        return false;
    }
};

async function set(settings) {
    try{
        await fsPromises.writeFile(__dirname+'/settings.json', JSON.stringify(settings));
        return true
    } catch (err) {
        console.error('[ERROR] set settings.json error.', err);
        return false;
    }
};

module.exports = {
    get: get,
    set: set
};