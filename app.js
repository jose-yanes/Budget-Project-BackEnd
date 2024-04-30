require('dotenv').config();

const express = require('express');
const app = express();

//DB
const connectDB = require("./db/connect");

//Routers
const expenseRouter = require("./routes/expenseRoutes");

//Middleware

app.use(express.json());

app.get("/", ( req, res ) => {
    res.send("Hi!");
})

app.use("/api/v1/expenses", expenseRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};


start();