let o1=require(`./module_1`);
let o2=require(`./module_2`);

// console.log(add(1,2));
// console.log(sub(1,2));

console.log(o1.getName());
console.log(o2.getName());

o1.setName("superman");
o2.setName("batman");
console.log(o1.getName());
console.log(o2.getName());


