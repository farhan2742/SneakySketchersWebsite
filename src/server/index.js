// Set dependancies

const dotenv                = require('dotenv'),
      express               = require('express'),
      bodyParser            = require('body-parser'),
      cors                  = require('cors'),
      path                  = require('path'),
      methodOverride        = require('method-override'),
      indexRoutes           = require("./routes/index")

// config dependancies

// dot ENV
dotenv.config();
// Express
const app = express();
app.use(express.static('dist'));
// Method Override
app.use(methodOverride('_method'))
// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS
app.use(cors());

// Connect DB


// Express Session

// Passport


// App temp data storage




//seedDB();

// Designate routes

app.use(indexRoutes);


// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Example app listening on port 3000!')
});

module.exports = app