const express = require("express");
const router = express.Router();
const {createExpense, getAllExpenses, deleteExpense, getFilteredExpenses} = require("../controllers/expenseController");

router.route("/expenses")
.post(createExpense)
.delete(deleteExpense)

router.route("/getAllExpenses")
.get(getAllExpenses)

router.route("/getFilteredExpenses")
.get(getFilteredExpenses)


module.exports = router;