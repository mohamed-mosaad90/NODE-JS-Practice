const express = require('express')
const path = require("path");
const morgan = require('morgan')/// it get me more data about response like 1-(type of api post or patch) 2- (Response Time) 3- (Response Size)
const usersRouter = require('./routers/userRouters');
const app = express()
const port = 3000
app.use(express.json())// to parse from json to OBJ as we know
app.use(express.urlencoded())// to parse from form (like any form user can send data to backend) to OBJ as we know
app.use(morgan('short'))
app.use('/users', usersRouter)
// app.use('/users', (req, res, next) => {

//     next();
// })
app.get('/', (req, res) => {


    res.send('Hello World!')
})
// app.get("/image", (req, res) => {

//     // const imaegPath = path.join(__dirname, './1.jpg');
//     // res.sendFile(imaegPath);
// })
// app.post('/users', (req, res) => {
//     // console.log(req.body);

//     const { name, gmail } = req.body;


//     res.send("created succesfully")
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})