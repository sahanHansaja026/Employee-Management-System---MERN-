const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const postRouter = require('./routes/employee');
const departmentRouter = require('./routes/department');

app.use(bodyParser.json());
app.use(cors());

app.use(postRouter);
app.use(departmentRouter);

const PORT = 7500;
const database = "mongodb+srv://sahanhansaja026:Qd3A80oZanb9R6Vb@cluster0.z6mjgah.mongodb.net/";

mongoose.connect(database)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => console.log("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
