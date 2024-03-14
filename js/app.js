console.log ('FIZZBUZZ')

//scrivere un programma che stampi in console i numeri da 1 a 100:
// - impostare un ciclo che si ripeta 100 volte
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

    // Il risultato che deve 'vincere' sugli altri per essere stampato è quello con due valenze quindi:
    // SE un numero è multiplo di 3 e di 5, stampare la scritta 'FizzBuzz'
    if (fizz && buzz) {
        console.log ('FizzBuzz') 
     }
    // SE INVECE è multiplo di 3, stampare la scritta 'Fizz'
    else if (fizz) {
       console.log ('Fizz') 
    // SE INVECE è multiplo di 5, stampare la scritta 'Buzz'
    } else if (buzz) {
        console.log ('Buzz')
    }
    // ALTRIMENTI stampare la variabile 'num'
    else {
        console.log (num)
    }
}


// {}
