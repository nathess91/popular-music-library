var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

app.get('/', function homepage(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(request, response) {
  var name = request.params.name;
  response.sendFile(__dirname + '/views/templates/' + name + '.html');
});

app.get('/api', controllers.api.index);

app.get('/api/songs', controllers.songs.index);
app.get('/api/songs/:songId', controllers.songs.show);
app.post('/api/songs', controllers.songs.create);
app.delete('/api/songs/:songId', controllers.songs.destroy);
app.put('/api/songs/:songId', controllers.songs.update);

app.get('*', function homepage(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
