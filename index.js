/*
|=======================================|
| NAME: NYOH API                        |
| VERSION: 0.0.1                        |
| CREATOR: AMIRUL DEV                   |
| WEB: WWW.AMIRULDEV.NET                |
| TEMPLATE BY: MBAH AGUS                |
|=======================================|
*/
var express = require('express'),
cors = require('cors'),
secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./renz/lib/color.js')
var mainrouter = require('./router/main'),

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("./renz/views")) // temp

app.use('/', mainrouter) // home

app.listen(PORT, () => {
console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
