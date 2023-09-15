const express = require("express");
const app = express();
const port = 3000;

app.set('views', './views'); ; // setting views
app.set('view engine', 'ejs'); // setting view engine

app.get('/', (req,res) => {
    res.render('main', {text: 'This is EJS'})
})

app.listen(port, ()=> console.log(`NE-HOW! Server is now on Port: ${port}`))