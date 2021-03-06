const express = require("express")
const cors = require("cors")
const { connection } = require("./database/util")
const bodyParser = require("body-parser")

var path = require('path')
const configuracion = require('./configuracion/VariablesEntorno');
const app = express()
connection()


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



app.use(express.static(path.join(__dirname, './public')));

app.use("/api",  require('./routes/games'));
app.use("/rest/api/ui",  require('./routes/Ui'));
app.use('/api/accounts', require('./routes/users'));
var port = process.env.PORT || configuracion.port;

app.listen(port, function() {
	console.log(`La magia ocurre en el puerto ${port}`);
  });
  