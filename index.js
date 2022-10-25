const express = require('express')
const app = express();

const cors = require('cors')
app.use (cors());

const port = process.env.port || 5000;

const courses = require('./Data/courses.json')

app.get('/',(req,res)=>{
    res.send('Server is running on this port');
})

app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const tutorial = courses.find(c => c.id == id);
    res.send(tutorial);
})

app.listen(port, ()=>{
    console.log('Server is running on', port)
})