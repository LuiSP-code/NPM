const express = require('express');
const app = express();
const PORT = 3000;
const path=require('path');

// Multiple routing
const router = express.Router();

router.get('/page1',(req, res, next) =>{
    res.sendFile(path.join(__dirname,"/public","/index1.html"));
    console.log("Page_1 Router Working");
});

router.get('/page2',(req, res, next) =>{
    res.sendFile(path.join(__dirname,"/public","/index2.html"));
    console.log("Page_2 Router Working");
});

router.get('/page3',(req, res, next) =>{
    res.sendFile(path.join(__dirname,"/public","/index3.html"));
    console.log("Page_3 Router Working");
});

app.use(router);
app.use(express.static('public'))

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
