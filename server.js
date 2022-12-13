const express = require("express");
const fs = require("fs");
const path = require("path");

const fileReader = require("./fileReader");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5500;

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/..index.html`));
});

app.get("/api/pizza", async (req, res) => {
  console.log("/api/pizza");
  const fileData = await fileReader(path.join(`${__dirname}/pizza.json`));

  console.log(fileData);

  // console.log(fileData.toString());
  res.send(fileData);
  // res.send(fileData.toString());
});

app.get("/api/allergens", async (req, res) => {
  console.log("/api/pizza");
  const fileData = await fileReader(path.join(`${__dirname}/allergens.json`));

  console.log(fileData);

  // console.log(fileData.toString());
  res.send(fileData);
  // res.send(fileData.toString());
});


app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));