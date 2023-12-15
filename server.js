const express = require("express");

const app = express();
app.listen(3000);

app.get("/", (req, res) => {
  res.send("Dobrodosli na CR_Hub");
  console.log("Server je uspesno pokrenut!");
});

const partneriRouter = require("./routes/partneriRuter");

app.use("/users",partneriRouter);
