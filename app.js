const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.route("/")
.get((req, res) => {
  res.render('timer');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 7000;
}
app.listen(port, (err) => {
  if(!err) {
    console.log("Server spinning up on port: " + port);
  } else {
    console.log(err);
  }
});
