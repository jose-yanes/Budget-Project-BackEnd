const Expense = require("../models/Expense");
const { StatusCodes } = require("http-status-codes");

//Create expense

const createExpense = async ( req, res ) => {
    const expense = await Expense.create(req.body)
    res.status(StatusCodes.CREATED).json({expense})
}
//Edit expense

//Delete expense

//Get Expense

//Get All Expenses

const getAllExpenses = async ( req, res ) => {
    const expensesFound = await Expense.find()
    res.status(StatusCodes.OK).json({expensesFound, count: expensesFound.length})
}

module.exports = {
    createExpense,
    getAllExpenses
}



