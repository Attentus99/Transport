


function calculate(){
    var weight = document.querySelector('.weightAmount').value;
    var kilometers = document.querySelector('.kmAmount').value;
    var addKilometer = document.querySelector('.addKmText');
    let oblicz = document.querySelector('.enter');
    let result = document.querySelector('.price');
    let kilos;
    let wynik;
    kilos = kilometers - 10;
    addKilometer.innerHTML = kilos;
    if (weight <= 800 && kilometers > 10)
    {
        wynik = kilos*7 +89
        result.innerHTML = wynik;
    }
    else if (weight > 800 && weight< 1601 && kilometers > 10) {
        wynik = kilos * 14 + 178
        result.innerHTML = wynik;
    }
    else if (weight > 1600 && weight < 2401 && kilometers > 10) {
        wynik = kilos * 21 + 267
        result.innerHTML = wynik;
    }
    else if (weight > 2400 && weight < 3201 && kilometers > 10) {
        wynik = kilos * 28 + 356
        result.innerHTML = wynik;
    }
        
    else if (weight > 3200 && weight < 4001 && kilometers > 10) {
        wynik = kilos * 35 + 445
        result.innerHTML = wynik;
    }
    else if (weight > 4000){
        result.innerHTML = "Powyżej 4 ton";
    }

    else if (kilometers < 10) {
        result.innerHTML = "Poniżej 10km"
    }
    
}





