var liczSkomplikowanie = function(haslo){
    var skomplikowanie = 0;

    var wyrazeniaRegularne = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /.{16}/,
        /[ !-// :-@ [-` {-ÿ ]/
    ];

    wyrazeniaRegularne.forEach(function (wyrazenie) {
        if (wyrazenie.test(haslo)){
            skomplikowanie++;
        }
    });

    return {
        value: skomplikowanie,
        max: wyrazeniaRegularne.length
    }
}

var sprawdzSileHasla = function (haslo) {
    var pasek = document.querySelector('#pasek'),
        skomplikowanie = liczSkomplikowanie(this.value);

    pasek.value = skomplikowanie.value;
    pasek.max = skomplikowanie.max;
}

var input = document.querySelector('#haslo');
input.addEventListener('keyup', sprawdzSileHasla);