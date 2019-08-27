const os = require('os');
const fs = require('fs');

function getVolumeList(path) {
    try{
        return fs.readdirSync(path).map(function(item) {
            let file = __dirname +'/'+ item;
            let info = fs.statSync(file);
            return {
                name: file,
                size: info.size,
                create: info.birthtime,
                type: info.isDirectory() ? 'd' : info.isFile() ? 'f' : 'o',
                detail: info
            }
        });
    } catch (err) {
        console.error('[ERROR] getVolumeList error.', err);
        return {};
    }    
}

function uploadFile(req) {
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

module.exports = {
    getVolumeList: getVolumeList,
    getFileDetail: getFileDetail,
    uploadFile: uploadFile
};