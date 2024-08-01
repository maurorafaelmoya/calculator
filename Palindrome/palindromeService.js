
class PalindromeService{
    
    async isPalindromeService(text){

        //
        const cadenaSinEspacios = text.replace(/[^a-zA-Z0-9]/g, '');

        const convertirMayus = cadenaSinEspacios.toLowerCase();

        const cadenaAlreves = convertirMayus.split('').reverse().join('');

        if(convertirMayus === cadenaAlreves){

            return {code: 201, data: true, msg:'Es un palindromo'}

        }else{
            return {code: 500, data: false, msg:'No es un palindromo'}

        }


    }
}


module.exports = PalindromeService
