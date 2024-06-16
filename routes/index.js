var express = require('express');
var router = express.Router();

const Expense = require("../models/expenses");
const expenses = require('../models/expenses');



router.get('/', async function(req , res) {
  try {
    const expenses = await Expense.find();
    res.render("index.ejs", { record: expenses });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/all', async function(req , res) {
  const espenses = await Expense.find();
  res.send(expenses);
});

router.post('/create', async function(req, res) { 
  try {
    const createdExpense = await Expense.create({
      name: req.body.name, 
      amount: req.body.expense
    });
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error); 
  }
});

router.post('/edit/:id', async function(req, res) { 
  try {
    await Expense.findByIdAndUpdate(req.params.id, {
      name: req.body.name, 
      amount: req.body.expense
    },{new: true});
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error); 
  }
});


module.exports = router;
