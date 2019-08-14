

// npm init -y

//npm install express --save

//npm install hbs

const path = require('path')
const express = require('express')

console.log(__dirname);
console.log(path.join(__dirname,'../public'));

const app = express()
const publicDirPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirPath))

// app.com
// app.com/help
// app.com/about

app.get('/help', (req, res) => {
    res.send([
        {
            name:'rinto',
            age:10
        },
        {
            name:'neil',
            age:20
        }
    ])
})

app.get('/wheather', (req, res) => {
    res.send('Currenty weather')
})

// http://localhost:3000/
app.listen(3000, () => {
    console.log('Server is up on 3000')
})