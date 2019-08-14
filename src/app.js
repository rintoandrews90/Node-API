

// npm init -y
//npm install express --save
//npm install hbs

const path = require('path')
const express = require('express')

console.log(__dirname);
console.log(path.join(__dirname,'../public'));

const app = express()
const publicDirPath = path.join(__dirname,'../public')

//Customize View Directory

//Dynamic Templates
app.set('view engine', 'hbs')
// http://localhost:3000/
// Provide index page
app.get('', (req,res) => {
    res.render('index', {
        title:'Weather App',
        name:'Rinto Andrews'
    })
})
// http://localhost:3000/about
// Provide about page
app.get('/about', (req,res) => {
    res.render('about', {
        appname:'Weather App',
        createdby:'Rinto'
    })
})
//Static JSON
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
//Static Text
app.get('/wheather', (req, res) => {
    res.send('Currenty weather')
})

// http://localhost:3000/
app.listen(3000, () => {
    console.log('Server is up on 3000')
})