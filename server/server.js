const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
