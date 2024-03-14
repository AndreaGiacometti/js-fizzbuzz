console.log ('FIZZBUZZ')

//scrivere un programma che stampi in console i numeri da 1 a 100:
// - impostare un ciclo che si ripeta 100 volte
let result = "";
for (let i=0; i < 100; i++) {
    // - scrivere una variabile che conti i numeri da 1 e non da 0
    const num = i + 1
    //stampare i numeri secondo questo procedimento:
    // - se un numero è multiplo di 3, stampare la scritta 'Fizz'
    // - se un numero è multiplo di 5, stampare la scritta 'Buzz'
    // - se un numero è multiplo di 3 e di 5, stampare la scritta 'FizzBuzz'

    // impostare la variabile per determinare se un numero è multiplo di 3 (n / 3 dà resto = 0)
    const fizz = num % 3 === 0
    // impostare la variabile per determinare se un numero è multiplo di 5 (n / 3 dà resto = 0)
    const buzz = num % 5 === 0

    // SE un numero è multiplo di 3 e di 5, stampare la scritta 'FizzBuzz'
    if (fizz && buzz) {
        result += '<div class="text-center col-3 p-2">FIZZBUZZ</div>'
     }
    // SE INVECE è multiplo di 3, stampare la scritta 'Fizz'
    else if (fizz) {
        result += '<div class="text-center col-3 p-2">FIZZ</div>'
    // SE INVECE è multiplo di 5, stampare la scritta 'Buzz'
    } else if (buzz) {
        result += '<div class="text-center col-3 p-2">BUZZ</div>'
    }
    // ALTRIMENTI stampare la variabile 'num'
    else {
        result += '<div class="text-center col-3 p-2">' + num + '</div>'
    }

}

document.getElementById('stamp').innerHTML = result
// {}
