# ukkonen_express_intro_v1

[] npm init --yes
[] npm install express 

client and server speak different languages 
[] npm install body-parser

need to tell the server to use body parser in server.js

const bodyParser = require('body-parser'); at the top

and include app.use(bodyParser.urlencoded({extended: true}));

KILL ALL NODE 

