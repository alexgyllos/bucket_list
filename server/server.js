const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
const parser = require('body-parser');

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('bucket_list');
  const countryCollection = db.collection('countries');
  const countryRouter = createRouter(countryCollection);
  app.use('/api/countries', countryRouter);

})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
