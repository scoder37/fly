__path = process.cwd()

var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__path + '/renz/views/home.html')
})


router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'King Bot',
            namaowner: 'Amirul Dev',
            instagram: 'amirul.dev',
            youtube : 'Bos Muda'
        }
    }
    res.json(config)
})

module.exports = router
