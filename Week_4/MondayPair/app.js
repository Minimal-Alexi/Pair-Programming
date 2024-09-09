const express = require("express");
const app = express();
const tourRouter = require ('./routers/tourRouter')

// Middleware to parse JSON
app.use(express.json());

app.use("/", tourRouter)

const port = 4000

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
