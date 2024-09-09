const express = require("express");
const app = express();
const tourRouter = require ('./routers/tourRouter')
const userRouter = require ('./routers/userRouter')

// Middleware to parse JSON
const morgan = require('morgan');
app.use(morgan('tiny'));

app.use(express.json());

app.use("/api/tours", tourRouter)
app.use('/api/users', userRouter);


const port = 4000

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
