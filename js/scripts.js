var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

animal = animal.toUpperCase(animal);
//console.log(animal);

var animalChange = text.replace('Papugi', animal);
//console.log(animalChange);

var partOfAnimalChange = animalChange.slice(0, animalChange.length/2);

console.log(partOfAnimalChange);