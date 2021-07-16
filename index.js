const express = require("express");
const bodyParser  = require("body-parser");
const cors = require("cors");
const posts = require('./routers/posts');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:Babycomeback64@cluster0.38krw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extend: true, limit: '30mb' }));
app.use(cors());

// app.get('/', (req, res)=>{
//     res.send('SUCCESS');
// });

app.use('/posts', posts);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to DB')
    app.listen(PORT, () => {
        console.log(`Server is listening on Port ${PORT}`);
    });
})
.catch((err)=> {
    console.log('err', err);
});

