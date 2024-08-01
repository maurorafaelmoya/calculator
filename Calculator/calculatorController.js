const { request, response } = require("express");
const CalculatorService = require("./calculatorService");

const calculatorService = new CalculatorService;


class CalculatorController{



    async addition(req= request, res= response){
        const { a, b } = req.body

        const { code, data, msg} = await calculatorService.additionService(a, b)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }

    async subtraction(req= request, res= response){
        const { a, b } = req.body

        const { code, data, msg} = await calculatorService.subtractionService(a, b)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }

    async multiplication(req= request, res= response){

        const { a, b } = req.body

        const { code, data, msg} = await calculatorService.multiplicationService(a, b)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }

    async division(req= request, res= response){

        const { a, b } = req.body

        const { code, data, msg} = await calculatorService.divisionService(a, b)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }


}




module.exports = CalculatorController
