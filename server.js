const express = require("express");
const PORT = 8000;
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

app.use('/static',express.static("assets"));

app.use("/", require("./routes/index"));

app.listen(PORT, (e) => {
  if (e) {
    console.log(e);
    return false;
  }
  console.log("server is running on http://localhost:" + PORT);
});
