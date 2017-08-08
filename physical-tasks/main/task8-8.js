module.exports = function getPrimeFactors(number){
 
    let result = '';
    let i = 2;

    while (number > 1) {
        if (number % i == 0) {
            result += i;
            number /= i;
        }

        else {
            i++;
        }
    }

    console.log(result);

    return result;  
}