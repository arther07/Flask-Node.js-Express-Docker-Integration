const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Render Form
app.get('/', (req, res) => {
    res.render('index');
});

// Handle Form Submission
app.post('/submit', async (req, res) => {
    try {
        const { name, email } = req.body;
        await axios.post('http://backend:5000/submit', { name, email }); // Flask backend
        res.send("Data submitted successfully!");
    } catch (error) {
        res.send("Error submitting data.");
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});
