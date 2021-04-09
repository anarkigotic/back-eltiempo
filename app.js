const express = require('express');
require('dotenv').config();
const cors = require('cors');
const news = require("./routes/main")

const app = express();
app.use(cors())

app.use(express.json());


app.use('/news',news)

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});