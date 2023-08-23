const express = require('express');
const axios = require('axios');

//ajouter pour cacaher le clée api étape 1
require('dotenv').config();

const app = express();
const port = 3001; // Vous pouvez utiliser un autre port si celui-ci est déjà utilisé

//ajouter pour cacaher le clée api étape 2
const apiKey = process.env.API_KEY;
const apiUrl = 'http://api.mediastack.com/v1/news';

app.use(express.static('public'));

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                access_key: apiKey,
                languages: 'fr',
                sort: 'published_desc',
            },
        });

        const newsArticles = response.data.data;
        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching news.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
