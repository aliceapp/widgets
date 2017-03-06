var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/hotels/6/facilities', function (req, res) {
  res.send('[{"id": 1, "name":"facility 1"}, {"id": 2, "name": "facility 2"}]');
});

router.get('/hotels/6/facilities/1', function (req, res) {
  res.send('{"id": 1, "name":"facility 1"}');
});

router.get('/hotels/6/facilities/1/menus', function (req, res) {
  res.send('[{"id": 1, "name":"menu 1"}, {"id": 2, "name": "menu 2"}]');
});

router.get('/hotels/6/facilities/1/services', function (req, res) {
  res.send('[{"id": 3, "name":"service 3"}, {"id": 4, "name": "service 4"}]');
});

router.get('/hotels/6/facilities/1/services/3', function (req, res) {
  res.send('{"id": 3, "name":"service 3"}');
});

router.get('/hotels/6/facilities/1/services/3/options', function (req, res) {
  res.send('[{"id": 1, "name":"option 1", "required": true, "dataType": "Text"}, {"id": 2, "name":"option 2", "required": false, "dataType": "SelectOne", "values": ["one", "two"]}]');
});


app.use(function (req, res, next) {
  res.contentType('application/json');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next();
});

app.use('/v1', router);

app.listen(8080, function(){
  console.log('Express server listening on port 8080');
});