let rank = [
    { nombre: 'Maki', puntuacion: 58 },
    { nombre: 'Francesc', puntuacion: 35 },
    { nombre: 'Serafín', puntuacion: 73 }
];

function bingo() {

    let numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    let ranNumber = shuffle(numbers);
    let bingoCard = [
        { number: ranNumber[0], matched: false },

        { number: ranNumber[1], matched: false },

        { number: ranNumber[2], matched: false },

        { number: ranNumber[3], matched: false },

        { number: ranNumber[4], matched: false },

        //nueva linea

        { number: ranNumber[5], matched: false },

        { number: ranNumber[6], matched: false },

        { number: ranNumber[7], matched: false },

        { number: ranNumber[8], matched: false },

        { number: ranNumber[9], matched: false },

        //nueva linea

        { number: ranNumber[10], matched: false },

        { number: ranNumber[11], matched: false },

        { number: ranNumber[12], matched: false },

        { number: ranNumber[13], matched: false },

        { number: ranNumber[14], matched: false }];

    function shuffle(numbers) {
        var i = numbers.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
        return numbers;
    
    }

    console.clear();
    ranking();

    let userName = prompt('¡Bienvenidx al Bingo! ¿Cómo te llamas?');
    let contador = 0;
    let linea = 0;
    let numeroRandomOne;
    let numeroRandom;
    let numeroEncontrado;
    let numerosSacados = [];

    if (userName !== null) {
        generarCarton();
    } else {
        console.log('¡Hasta la próxima!')
    }

    function generarCarton() {
        console.clear();
        console.log('Este es tu cartón:');
        console.table(bingoCard, ['number']);
        let start = confirm('Si te gusta este cartón, acepta para comenzar a jugar. Si no, cancela para generar otro.');
        if (start === true) {
            generarNumeroBombo();
        } else {
            bingo();
        }
    }

    function generarNumeroBombo() {
        let primeraLinea = bingoCard.slice(0, 5);
        let segundaLinea = bingoCard.slice(5, 10);
        let terceraLinea = bingoCard.slice(10, 15);

        numeroRandom = Math.floor(Math.random() * 90) + 1;
        if (numerosSacados.includes(numeroRandom) === true) {
            generarNumeroBombo();
        } else if (numerosSacados.includes(numeroRandom) === false) {
            console.clear();
            console.log('Estamos jugando con el número ' + numeroRandom + '.');
            numerosSacados.push(numeroRandom);
            match();
            if (linea === 0 && ((primeraLinea.every((elem) => elem.matched === true)) || (segundaLinea.every((elem) => elem.matched === true)) || (terceraLinea.every((elem) => elem.matched === true)))) {
                linea++;
                alert('¡LÍNEA!');
                preguntarNuevoTurno();
            } else if (bingoCard.every((elem) => elem.matched === true)) {
                alert('¡¡¡¡¡BBBIIINNNGGGOOO!!!!!');
                console.log('¡Enhorabuena! Has completado el cartón en ' + contador + ' turnos.');
                let user = { nombre: userName, puntuacion: contador }
                rank.push(user);
                ranking();
                volverAjugar();
            } else {
                preguntarNuevoTurno();
            }
        }
    }

    function match() {
        for (let i = 0; i < bingoCard.length; i++) {
            if (bingoCard[i].number === numeroRandom) {
                console.log('Se ha encontrado el número ' + bingoCard[i].number + '.')
                numeroEncontrado = bingoCard[i].number = 'x';
                bingoCard[i].matched = true;
            }
        }
        contador++;
        console.table(bingoCard, ['number']);
    }

    function preguntarNuevoTurno() {
        let askNewTurn = confirm('¿Pasamos al siguiente turno?');
        if (askNewTurn === true) {
            generarNumeroBombo();
        } else {
            console.log('Has cancelado.')
            volverAjugar();
        }
    }

    function ranking() {
        let rankOrdenado = rank.sort((a, b) => (a.puntuacion) - (b.puntuacion));
        console.log('RANKING:');
        console.table(rankOrdenado);
    }

    function volverAjugar() {
        let playAgain = confirm('¿Desea volver a jugar?');
        if (playAgain === true) {
            bingo();
        } else {
            console.log('¡Hasta la próxima!');
        }
    }
}

bingo();