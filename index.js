const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// courseCategories and courseDetails
const courseCategories = require('./data/courseCategories.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/courseCategories', (req, res) => {
    res.send(courseCategoriess)
});

app.get('/courseDetails', (req, res) =>{
    res.send(courseDetails);
});

app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourseDetails = courseDetails.find(n => n._id === id);
    res.send(selectedCourseDetails);
});

app.get('/', (req, res) => {
    res.send('API Running');
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
//explore the Express api
module.exports = app;