const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');

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

let students = []

app.post('/api/student', (req, res) => {
    let { name } = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('student added successfully', {author:'Laura', type:'manual entry'})

    res.status(200).send(students)
});

const port = process.env.PORT || 4400
app.listen(port, () => console.log(`Server up and running on ${port}!`));