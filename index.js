const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000


var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

app.post('/',function calculateRate(req, res){
    var weight = req.body.weight
    var type = req.body.type
    var rate = weight * type
    
    res.render('pages/index',{
        rate:rate,
        weight:weight,
        type:type
    })
    console.log(descType)
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))