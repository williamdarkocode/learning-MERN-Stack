const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/itemsRoutes");


const app = express();

//Body parser middleware
app.use(bodyParser.json());

// database connection
const db = require('./config/keys').mongoURI;

// connect to mongo

mongoose.connect(db)
.then(()=> {
    console.log("MongoDB connected Biatch!")
})
.catch(err => {
    console.log(err);
});


//user routes
app.use('/api/items', items);

// start express server
const port = process.env.PORT || 5000;

app.listen(port, ()=> {console.log("server started on port: ", port, "...")});