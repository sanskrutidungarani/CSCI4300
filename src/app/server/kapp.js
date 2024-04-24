const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const kwye = require('./routes/api/kwye')



app.use(cors(
    {
        origin: true, 
        credentials: true
    })
);

app.use('/api/kwye', kwye);


const conn_str = 'mongodb+srv://krish-mehta:4OgDTebxneYsLCBH@server-project.rdobavt.mongodb.net/?retryWrites=true&w=majority&appName=server-project';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`)); // Backticks for interpolation
    console.log('MongoDB Connection Successful...');

})
.catch(err => {
    console.log(`Error in DB Connection ${err}`); // Backticks for interpolation
});