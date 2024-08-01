
class CalculatorService{

    async additionService(a,b){
        const result = Number(a) + Number(b);
        return {code: 201, data: Number(result), msg:'operacion exitosa'}
    }

    async subtractionService(a,b){
        const result = Number(a) - Number(b);
        return {code: 201, data: Number(result), msg:'operacion exitosa'}
    }

    async multiplicationService(a,b){
        const result = Number(a) * Number(b);
        return {code: 201, data: Number(result), msg:'operacion exitosa'}
    }

    async divisionService(a,b){
        const result = Number(a) / Number(b);
        return {code: 201, data: Number(result), msg:'operacion exitosa'}
    }


}

module.exports = CalculatorService