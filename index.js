const express = require('express')
const cors = require('cors')
const Connection = require('./database/db')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.routes')
const contactRoutes = require('./routes/contact.routes')
const path = require('path')
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);

const PORT = 8000;

Connection();
app.use(express.static(path.join(__dirname, "./build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));