const express = require('express')
const netstat_function = require('./netstat')

const app = express()
app.get('/', async (req, res) => {
    const allResults = await netstat_function();
    res.send(allResults)
});

app.listen(3000, () => console.log('Server started.'))
