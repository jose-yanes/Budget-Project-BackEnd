const express = require("express");
const router = express.Router();
const {createExpense, getAllExpenses} = require("../controllers/expenseController");

router.route("/createExpense")
.post(createExpense)

router.route("/getAllExpenses")
.get(getAllExpenses)


module.exports = router;
    