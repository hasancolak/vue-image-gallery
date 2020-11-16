const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const axios = require('axios');

const apiConstant = 'https://api.imgur.com/3/gallery';
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

async function callApiUrl(url, res) {
  try {
    const headerParam = { Authorization: 'Client-ID b8aeb3f4f9ebbb5' };
    const { data } = await axios.get(url, {
      headers: headerParam
    });

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
}

app.get('/:id', (req, res) => {
  const fullUrl = `${apiConstant}/album/${req.params.id}`;
  callApiUrl(fullUrl, res);
});

app.get('*', (req, res) => {
  const fullUrl = `${apiConstant}${req.url}`;

  callApiUrl(fullUrl, res);
});


app.listen(port, () => console.log(`Server is running on ${port}`));
