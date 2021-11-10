const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/home.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/login.html'));
    //__dirname : It will resolve to your project folder.
  });

//add the router
app.use('/', router);
//app.use('/login', router);
app.use(express.static('public'));

app.listen(3000);

console.log('Running at Port 3000');

