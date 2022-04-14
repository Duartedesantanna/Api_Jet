const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './../../public/upload/produtos')
  },
  filename: function(req, file, cb){
    cb(null,Date.now()+"_"+file.originalname);
  }
});

module.export = {
    storage
} 
