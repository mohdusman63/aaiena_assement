const express = require('express');
const path=require('path')
const app = express();
// const cors=require('cors')

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'upload')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(cors)


const authRoute = require('./routes/authRoute');
const galleryRoute = require('./routes/galleryRoute')
app.use(authRoute)
app.use(galleryRoute)

// require('./models')
// Define your routes and controllers here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
