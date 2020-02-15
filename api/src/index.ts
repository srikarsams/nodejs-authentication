import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ message: "Done" }));

app.listen(3000, () => console.log("listening to port 3000"));
