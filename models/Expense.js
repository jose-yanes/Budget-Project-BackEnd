const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        maxlength: 50,
    },
    date: {
        type: String,
        default: function() {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    },
    category: {
        type: String,
        required: [true, "Please provide category"],
        maxlength: 30
    },
    month: {
        type: String,
        default: function() {
            const date = new Date();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            return month;
        }
    }
})

module.exports = mongoose.model("Expense",ExpenseSchema);