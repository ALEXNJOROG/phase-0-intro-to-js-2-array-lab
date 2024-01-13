let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(newCat) {
    var newCatsArray = [...cats, newCat];
    return newCatsArray;
}


var updatedCats = appendCat('Broom');

console.log(cats);        
console.log(updatedCats); 

function prependCat(newCat) {
    var newCatsArray = [newCat, ...cats];
    return newCatsArray;
}


var updatedCats = prependCat('Arnold');


console.log(cats);        
console.log(updatedCats); 

function removeLastCat() {
    var newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}


var updatedCats = removeLastCatAndReturnNewArray();


console.log(cats);        
console.log(updatedCats); 


function removeFirstCat() {
    var newCatsArray = cats.slice(1);
    return newCatsArray;
}


var updatedCats = removeFirstCat();


console.log(cats);        
console.log(updatedCats); 
