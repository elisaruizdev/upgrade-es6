/* 3.1 Dado el siguiente array, crea una copia usando spread operators. */

const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsListOne];
console.log(`Points List: ${pointsListOne}.`);
console.log(`Points List Copy: ${pointsListCopy}.`);

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators. */

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = { ...toyTwo };
console.log(`Toy: ${JSON.stringify(toyTwo)}.`);
console.log(`Toy Copy: ${JSON.stringify(toyCopy)}.`);

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newObjectPoints = [...pointsListThree, ...pointsLis2];
console.log(`PointsList: ${JSON.stringify(pointsListThree)}.`);
console.log(`PointsLis2: ${JSON.stringify(pointsLis2)}.`);
console.log(`Combinación pointsList y pointsLis2: ${JSON.stringify(newObjectPoints)}.`);

/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newObject = { ...toyThree, ...toyUpdate };
console.log(`Toy: ${JSON.stringify(toyThree)}.`);
console.log(`Toy Update: ${JSON.stringify(toyUpdate)}.`);
console.log(`Combinación toy y toyUpdate: ${JSON.stringify(newObject)}.`);

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors];
colorsCopy.splice(1, 1);
console.log(`Colores: ${colors}.`);
console.log(`Copia colores: ${colorsCopy}`);