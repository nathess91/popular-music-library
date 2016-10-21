var db = require('./models');

var songLibrary = [];

songLibrary.push({
  title: "Don't Let Me Down",
  artist: "The Chainsmokers",
  year: "2016",
  writers: [ "Andrew Taggart", "Emily Warren", "Scott Harris" ],
  producers: [ "The Chainsmokers" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/en/4/44/Don%27t_Let_Me_Down_%28featuring_Daya%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
},
{
  title: "Cheap Thrills",
  artist: "Sia",
  year: "2016",
  writers: [ "Sia Furler", "Greg Kurstin" ],
  producers: [ "Greg Kurstin" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/en/f/fc/Sia_Cheap_Thrills.png"
},
{
  title: "Dark Horse",
  artist: "Katy Perry",
  year: "2013",
  writers: [ "Katy Perry", "Jordan Houston", "Lukasz Gottwald",
             "Sarah Hudson", "Max Martin", "Henry Walter" ],
  producers: [ "Dr. Luke", "Max Martin", "Cirkut" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/en/e/e8/DarkHorseCover.png"
},
{
  title: "One Dance",
  artist: "Drake",
  year: "2016",
  writers: [ "Aubrey Graham", "Paul Jefferies", "Noah Shebib",
             "Logan Sama", "Ayodeji Ibrahim Balogun", "Themba Sekowe",
             "Kyla Smith", "Errol Reid", "Luke Reid" ],
  producers: [ "Nineteen85", "DJ Maphorisa", "40", "Wizkid" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/commons/5/59/DrakeOneDance.png"
},
{
  title: "Call Me Maybe",
  artist: "Carly Rae Jepsen",
  year: "2012",
  writers: [ "Carly Rae Jepsen", "Josh Ramsay", "Tavish Crowe" ],
  producers: [ "Josh Ramsay" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/en/a/ad/Carly_Rae_Jepsen_-_Call_Me_Maybe.png"
},
{
  title: "Till the World Ends",
  artist: "Britney Spears",
  year: "2011",
  writers: [ "Lukasz Gottwald", "Alexander Kronlund", "Max Martin", "Kesha Sebert" ],
  producers: [ "Dr. Luke", "Max Martin", "Billboard", "Emily Wright" ],
  albumArt: "https://upload.wikimedia.org/wikipedia/en/6/6e/Britney_Spears_-_Till_the_World_Ends.png"
});

db.Song.remove({}, function(error, songs) {
  db.Song.create(songLibrary, function(error, songs) {
    if (error) { return console.log('ERROR', error); }
    console.log('all songs:', songs);
    console.log('created', songs.length, 'songs');
    process.exit();
  });
});
