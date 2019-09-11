const os = require('os');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const utils = require('./utils');

async function getVolumeList(directory) {
    try{
        let result = {};
        let dirinfo = await fsPromises.readdir(directory);
        result[directory] = [];
        await Promise.all(dirinfo.map( async function(item) {
            let file = directory +'/'+ item;
            let info = fs.statSync(file);
                result[directory].push({
                    name: item,
                    size: info.size,
                    create: info.birthtime,
                    type: info.isDirectory() ? 'd' : await utils.getFileType( path.extname(file) ),
                    detail: info
                })
        }));
        return result;        
    } catch (err) {
        console.error('[ERROR] getVolumeList error.', err);
        return {};
    }    
}

async function uploadFile(req) {
    const files = req.files
    console.log(files)
    var img = fs.readFileSync(req.files.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
     
    var finalImg = {
         contentType: req.file.mimetype,
         image:  new Buffer(encode_image, 'base64')
      };
   db.collection('quotes').insertOne(finalImg, (err, result) => {
       console.log(result)
    
       if (err) return console.log(err)
    
       console.log('saved to database')
       res.redirect('/')
     })
}

async function rename(oldPath, newPath) {
    try {
        await fsPromises.rename(oldPath, newPath);
        return true;
    } catch (err) {
        console.error('[ERROR] file rename error.', err);
        return false;
    }
}

async function copy(src, dest) {
    try {
        await fsPromises.copyFile(src, dest)
        return true;
    } catch (err) {
        console.error('[ERROR] file copy error.', err);
        return false;
    }
}

module.exports = {
    getVolumeList: getVolumeList,
    uploadFile: uploadFile,
    rename: rename,
    copy: copy
};