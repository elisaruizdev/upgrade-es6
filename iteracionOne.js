/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */

const getSum = (a=10,b=5) => a+b;
   
/* 1.1 Ejecuta esta función sin pasar ningún parametro */

const nullParam = getSum();
console.log(${nullParam})

/* 1.2 Ejecuta esta función pasando un solo parametro */

const onlyOne = getSum(a);
console.log(${onlyOne})

/* 1.3 Ejecuta esta función pasando dos parametros */
 
const allParam = getSum(a,b);
console.log(${allParam})
