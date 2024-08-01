const { request, response } = require("express");
const PalindromeService = require("./palindromeService");

const palindromeService = new PalindromeService;


class PalindromeController{

    async isPalindromeController(req= request, res= response){
        const { text } = req.body

        const { code, data, msg} = await palindromeService.isPalindromeService(text)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }

}


module.exports = PalindromeController

