const express = require("express");
const app = express();
let cors = require("cors");

const funkoRouter = require('./routes/funkoRoutes');
const userRouter = require('./routes/userRoutes');

//ler o json
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/funko', funkoRouter);

app.listen(8000)