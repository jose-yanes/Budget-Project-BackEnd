require('dotenv').config();

const express = require('express');
const app = express();

app.get("/", ( req, res ) => {
    res.send("Hi!");
})

app.use("/api/v1")


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};


start();