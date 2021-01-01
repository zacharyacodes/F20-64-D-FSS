const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
// const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const itemRoute = require('./routes/api');
const multer = require('multer');
const fs = require('fs')

// const server = require("./server");


let app = express();

app.use(cors());
app.use(bodyparser.json());
// 'resources/app/dist/assets/images'
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoute);
// app.use(express.static('public'));
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'public')
  },
  filename: (req, file, callBack) => {
      callBack(null, `${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
  const files = req.files;
  // console.log(files);
  if (!files) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send({sttus:  'ok'});
})

const upload1 = multer({ storage: storage }).single('file')


app.post('/deletephoto', upload1, async (req, res) =>{
  console.log('agya')
  var names= req.body;
  if(names.length>0){
  // var  bool= true;
    // for(i=0;i<names.length;i++){
      var path="public\\"+names[0];
      console.log(path);
  
      fs.unlink(path, function (err) {
        if (err) {
  
          // bool=false;
          console.log(err)
          return res.json({
            success: false
        });          
        } else {
          return res.json({
            success: true
        });
          // bool=true;
        }    // 
      // await unlinkAsync(path)
    })
  
    // res.end("deleted")
  // }
  
  
  // if(bool==true){
  //   return res.json({
  //     success: true
  // });
  // }
  }
  })
  

app.use('/user',userRoute);

app.use('/item',itemRoute);



const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log('server started' + PORT);

})


app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
// dist


var connectWithRetry = function() {
    return mongoose.connect('mongodb://localhost/sports', function(err) {
      if (err) {
        console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
        setTimeout(connectWithRetry, 5000);
      }else{
          console.log(' local connected')
      }

    });
  };
  connectWithRetry();
