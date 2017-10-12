const Express = require('express');
const bodyParser = require('body-parser');

const query = require('./query');

const app = new Express();

app.use(bodyParser.json());
app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
  });

app.get('/bestPrice', (request,response) => {
  const location = request.query.location;
  const month = request.query.month;
  query.findBestPrice(location,month)
    .then(rows => response.send(rows))
    .catch(e => console.error('ERROR', e));
});

app.get('/locations', (request,response) => {
  query.fetchLocations()
    .then(rows => response.send(rows))
    .catch(e => console.error('ERROR', e));
});

app.listen(3000, () => console.log('Application running on port 3000'));
