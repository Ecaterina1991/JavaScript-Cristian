//Comentariu pe o linie
/*
Comentarii
pe mai multe
linii
*/

/*
console.log - Afiseaza orice mesaj in consola. console.info- Afiseaza orice mesaj in consola.
console.warn - Afiseaza mesajul pe galben portocaliu
console.error - Afiseaza mesajul pe un background rosu
console.clear - Goleste consola
console.table - Afiseaza array-urile/obiectele in tabel
console.assert - Primeste 2 parametri. Primul o verificare (comparatie); al doilea mesajul pe care sa ni-l afiseze daca verificarea este falsa;
console.group si console.groupEnd - Ne grupeaza informatiile in grupuri
console.time si console.timeEnd - afiseaza timpul in milisecunde care a trecut de cand a fost apelat console.time - putem pune la inceputul si sfarsitul codului ca sa vedem in cat timp ruleaza codul nostru
 - 
*/
// console.time();
// console.log("Salut!");
// console.info("Salut info!");
// console.warn("Salut warn!");
// console.error("Salut error!");
// //console.clear();

// console.table(["Array1", "Array2", "Array3"]);
// console.table({name: "CRistian", nickname: "Khrizz"});
// console.assert(2>3, "Nu este mai mare");

// console.group('Primul grup');
// console.log('Grup 1!');
// console.log('Grup 2');
// console.log('Grup 3');
// console.groupEnd();

// console.group('Al doilea grup');
// console.log('Grup 1!');
// console.log('Grup 2');
// console.log('Grup 3');
// console.groupEnd();
// console.timeEnd();

//Variabile
/*
1. Numele variabilelor trebuie sa inceapa cu o litera sau semnul dolar
2. Numele variabilelor pot contine numai litere, cifre, underline sau semnul dolar.
3. Nu putem folosi nume rezervate de JavaScript 
Conventie: In JavaScript este recomandat ca numele variabilelor sa fie camelCase;
Conventie: numele variabilelor incep cu litera mica

*/

// const nume = "Cristian";
// console.log(nume);

// const tenYearsAgo = 2012;
// const currentYear = 2022;

/*
Tipuri de date

Categorii tipuri de date:
-Primitive
-Obiecte

Tipuri de date primitive:

1. String - Serie de caractere, cuvinte, propozitii, fraze. Se scriu intre ghilimele sau apostrofuri.
2. Number - Floating point number, ceea ce inseamna ca au mereu zecimale chiar dac nu le vedem
3. Boolean - Tip de date logic (true sau false)
4. Undefined - variabila fara valoare, goala, o declaram dar nu ii atribuim o valoare 
5. Null
6. Symbol - reprezinta o valoare unica ce nu poate fi schimbata
7. bigint - Numere care sunt prea mari pentru a putea fi reprezentate de tipul de date Number.

*/

const nume = "Ecaterina"; // string
const age = 29; //number
const esteMajor = true; //boolean
let altNume; //undefined
