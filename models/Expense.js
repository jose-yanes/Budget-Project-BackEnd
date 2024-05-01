const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        maxlength: 50,
    },
    date: {
        type: String,
        required: [true, "Please provide date DD/MM/YYYY"],
        minlength: 10,
        maxlength: 10
    },
    category: {
        type: String,
        required: [true, "Please provide category"],
        maxlength: 30
    },
    month: {
        type: String,
        minlength: 2,
        maxlength: 2,
    },
    year: {
        type: String,
        minlength: 4,
        maxlength: 4,
    }
})

ExpenseSchema.pre("save", function (){
    this.category = this.category.toLowerCase()
})

module.exports = mongoose.model("Expense",ExpenseSchema);