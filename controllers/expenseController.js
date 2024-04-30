const Expense = require("../models/Expense");
const { StatusCodes } = require("http-status-codes");

//Create expense

const createExpense = async ( req, res ) => {

    try{
        const month = req.body.date.slice(3,5);
        const year = req.body.date.slice(6);
    
        const expenseObj = {
            name: req.body.name,
            date: req.body.date,
            category: req.body.category.toLowerCase(),
            month: month,
            year: year
        };
    
        const expense = await Expense.create(expenseObj);
        res.status(StatusCodes.CREATED).json({expense});
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({msg: err.message});
    }


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



