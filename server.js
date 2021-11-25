const express = require('express');
// init application
const app = express();
// middleware
//const nodeMiddleWare = (req, res, next) => {
    //let authorized = true
    //authorized ? next() : res.status(401) .send('you are not authorized')
//}


// endpoint route handler
app.get('/',(req, res) => {
    res.sendFile(__dirname +'/views/Home.html');
})
app.get('/contact',(req, res) => {
    res.sendFile(__dirname +'/views/contact.html');
})
app.get('/Our%20Services',(req, res) => {
    res.sendFile(__dirname +'/views/Our Services.html');
})
//app.use(express.static(__dirname +'/views'))
app.get('/css/style.css', (req, res) =>{
    res.sendFile(__dirname +'/css/style.css');
})
//getHours and date
let Date = new Date();
//Date.getHours();
Date.getDay();
console.log(getDay(2))
//console.log(module)
app.listen(4000,(err)=>err ? console.log(err) :console.log("server is running"))
