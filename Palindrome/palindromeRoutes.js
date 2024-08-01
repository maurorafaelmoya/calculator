const { Router } = require('express');
const PalindromeController = require('./palindromeController');


const palindromeController = new PalindromeController;

const router = Router();

//saber si un array es palindromo
router.post('/', palindromeController.isPalindromeController);


module.exports = router;