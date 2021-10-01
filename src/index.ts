import express from "express"
import bodyParser from "body-parser"
import stores from "./controllers/stores"

/**
 * HTTP API
 */
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/stores", stores)

app.listen(6969)