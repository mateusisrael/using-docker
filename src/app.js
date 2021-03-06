const express = require('express');
const router = require('./api/routes/routes.js');
const cors = require('cors');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const myMid = (req, res, next) => {
    console.log('foi');
    next();
}

app.use(cors());
// app.use(myMid);

// Mongoose Testing
// const MovieSchema = mongoose.Schema({
//     name: String,
//     year: Number
// })
// const Movie = mongoose.model('movies', MovieSchema)

// const newMovie = new Movie({ name: "Teste filme 1", year: 2100})
// newMovie.save((err) => {
//     if(err) return console.log(err);
//     return console.log("New Movie added")
// })
// ====================
app.use(router);


mongoose.connect(
    'mongodb://127.0.0.1:17017/movie',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    app.listen(PORT, () => {
        console.log(`API at http://localhost:3000`) 
    });
})
.catch((err) => console.log(err));
