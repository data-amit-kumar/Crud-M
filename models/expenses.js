var express = require('express');
var router = express.Router();

const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/expense_track");

const expenseSchema = mongoose.Schema({
    name: String,
    amount: Number, 
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense",expenseSchema);
