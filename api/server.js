const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

//use cors middleware
app.use(cors());

//getting the cities database from the json file
const citiesDatabase = require('./citesDB.json');

// Endpoint to show all cities
app.get('/cities', (req, res) => {
    res.json(citiesDatabase);
});

// Endpoint to show one city based on ID
app.get('/cities/:id', (req, res) => {
    const cityId = req.params.id;
    const city = citiesDatabase.find(city => city.City.toLowerCase() === cityId.toLowerCase());

    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})