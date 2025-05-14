const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const VisitorRoute = require('./routes/visitorRoute')
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/visitor', VisitorRoute);

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})