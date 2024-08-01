const { Router } = require('express');
const CalculatorController = require('./calculatorController');


const calculatorController = new CalculatorController;

const router = Router();

//suma de dos numeros
router.post('/Addition', calculatorController.addition);

//resta
router.post('/Subtraction', calculatorController.subtraction);

//multiplicacion
router.post('/Multiplication', calculatorController.multiplication);

//division
router.post('/Division', calculatorController.division);


module.exports = router;