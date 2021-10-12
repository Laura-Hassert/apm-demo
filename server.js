const express = require('express');
const path = require('path');
// const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '272e2b755aa249349edfbc40b14bb878',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
});

const port = process.env.PORT || 4400
app.listen(port, () => console.log(`Server up and running on ${port}!`));