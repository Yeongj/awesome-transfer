const settings = require('./settings');

async function getFileType(extension) {
    let s = await settings.get();
    if (s.default.format.image.includes(extension)) return 'i';
    if (s.default.format.video.includes(extension)) return 'v';
    return 'o';
}

module.exports = {
    getFileType: getFileType
}