// UŽDUOTYS
// 1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
const mygtukas = document.getElementById("mygtukas")

mygtukas.addEventListener("click", function(){ 
    const vardas = document.getElementById('vardas').value;
    const skaicius = parseInt(document.getElementById('skaicius').value);

    if(Number.isInteger(skaicius)){
        const h1 = document.createElement("h1");
        h1.textContent = vardas.repeat(skaicius);
        document.body.appendChild(h1);
    } else {
        alert("Pataisyk skaičių!");
    }  
});

// 2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

const mygtukas1 = document.getElementById("mygtukas1");

mygtukas1.addEventListener("click", function() {
    const vardas1 = document.getElementById('vardas1').value.trim();

    if (vardas1.length > 0) {
        alert("Vardo ilgis: " + vardas1.length);
    } else {
        alert("Įveskite savo vardą!");
    }
});

// 3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

const mygtukas2 = document.getElementById("mygtukas2");

mygtukas2.addEventListener("click", function(){ 
    const vardas2 = document.getElementById('vardas2').value;
    const bNames = vardas2.split(" ");
    const firstName = bNames[0]
    const lastName = bNames[1]

    document.body.h1 = '';

    const h1 = document.createElement("h1");
    h1.innerHTML = `Vardas: ${firstName} <br>\n Pavardė: ${lastName}`;
  
    document.body.appendChild(h1); 
    
});

// Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.