const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/tools.js")
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
})

app.post("/tools/create", async (req, res) => {
  console.log(req)
  // const results = await db.createTool(req.query);
  // res.status(201).json({ id: results[0] })
})

app.get("/tools/get", async (req, res) => {
  const results = await db.getTools();
  res.status(201).json({ 'results': results })
})

app.get("/tools/get/:id", async (req, res) => {
  const results = await db.getTool(req.params.id);
  res.status(201).json({ 'results': results })
})

app.get("/usage/get/:id", async (req, res) => {
  const results = await db.getUsage(req.params.id);
  res.status(201).json({ 'results': results })
})

app.listen(3001, () => console.log("server is running on port 3001"))
