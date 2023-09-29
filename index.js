const hacker1 = "use";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "antonio";
console.log(` The navigator's name is ${hacker2};`);

if (hacker1.length < hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.o`);
}else if (hacker2.length < hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.o`)
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

for(let contador = 0 ; contador < hacker1.length; contador++) {
  console.log(hacker1[contador]); 
};

//console.log(hacker1.split('').reverse().join(''));
let nombreInverso = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  nombreInverso += hacker1[i];
}
console.log(nombreInverso);

//comparo cadenas por orden lexicografico utilizando el metodo localeCompare
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
}else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
}else {
  console.log("What?! You both have the same name?");
};





