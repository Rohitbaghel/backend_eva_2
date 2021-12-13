const multer = require('multer');

const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, callback) {
      const uniqueprefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, uniqueprefix +"-"+file.filename)
    }
  })
  
//   const upload = multer({ storage: storage })

const fileFilter = (req,file,callback)=>{
    if(file.mimetype ==="image/png" || file.mimetype ==="image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false)
    }
}

module.exports = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
})