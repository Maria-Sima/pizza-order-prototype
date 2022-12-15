const express = require("express");
const fs = require("fs");
const path = require("path");

const fileReader = require("./fileReader");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'))

const port = 5500;

app.get("/", (req, res) => {
  res.render(path.join(`${__dirname}/views/index.ejs`));
});

app.get("/pizza/list", (req, res) => {
  res.render(path.join(`${__dirname}/views/pizzaList.ejs`));
});

app.get("/api/pizza", async (req, res) => {

  const fileData = await fileReader(path.join(`${__dirname}/pizza.json`));
  res.send(fileData);
});

app.get("/api/allergens", async (req, res) => {

  const fileData = await fileReader(path.join(`${__dirname}/allergens.json`));
  res.send(fileData);

});

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));