"use script";

// let a = {
//     name: "Jo",
//     age: 1
// } // new Object()

// Object.keys(a) // [name, age]
// Object.values(a) // [Jo, 1]
// Object.entries(a) // [[name, Jo], [age, 1]]

// "name" in a

// delete a.age

// for (let key in a) {

// }





//* Паттерни проектування - запропонавані ідеї рішення якоїсь задачі (шаблони)

//? Factory(спрощення логіки, фабрика для створення об'єктів)
// function apple(type, price) {
//     this.type = type;
//     this.price = price;
// }

// new apple("golden")

// function applesFactory(params) {
//     // season
//     // price
//     // new apple
//     // return apple
// }

// let apple = applesFactory()



const fridge = {
  bread: rnd(2, 5),
  cheese: rnd(2, 5),
  sausage: rnd(2, 5),
};
 
const addInnerTimers = {
  bread: null,
  cheese: null,
  sausage: null,
}
 
function rnd(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
 
function addInner(innerName, num) {
  fridge[innerName] += num;
}
 
function Sandwich(inners) {
  this.inners = inners;
}
 
 
function SandwichFactory(inners = ["bread", "cheese"]) {
  for (let i = 0; i < inners.length; i += 1) {
    if (fridge[inners[i]] === 0) {
      console.error(`sorry, we run are out of ${fridge[inners[i]]}`)
      return
    }
  }
 
  for (let i = 0; i < inners.length; i += 1) {
    fridge[inners[i]] -= 1;
   
    if (fridge[inners[i]] === 1) {
      console.warn(`need to order ${inners[i]}`);
      addInnerTimers[inners[i]] = setTimeout(addInner, 5000, inners[i], 5)
    } else if (fridge[inners[i]] === 0) {
      console.error(`out of ${inners[i]}`);
      clearTimeout(addInnerTimers[inners[i]]);
      setTimeout(addInner, 1000, inners[i], 3)
    }
  }
 
  return new Sandwich(inners);
}
// Логіка робить окремо і один раз, а фабрика цю логіку повторює стільки раз скільки треба


