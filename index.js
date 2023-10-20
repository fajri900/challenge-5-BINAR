const express = require("express");
const morgan = require("morgan");
const ApiError = require("./utils/apiError");
const errorHandler = require("./controller/errorController");

const router = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(router);

app.all("*", (req, res, next) => {
  next(new ApiError("Routes does exist", 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server jalan di ${PORT}`);
});
