const express = require("express");
const app = express();
app.use(express.json());
const { addrecord, getRecord, addRecord } = require("./user");

const cors = require("cors");
app.use(cors());

app.get("/get-record", async (req, res) => {
  const list = await getRecord();

  res.json(list);
});

app.post("/add-record", async (req, res) => {
  const user = req.body;
  await addRecord(user);
  res.json("new record added");
});

app.listen(4000, () => {
  console.log("complited...");
});
