import express from "express"

const app = express()

app.get("/api", (_, res) => {
  res.send("backend working")
})

app.listen(5555, () => console.log("listening to port 5555"))
