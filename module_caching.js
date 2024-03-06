let m1=require(`./module_1`);

console.log(m1.getName());

m1.setName("superman");
console.log(m1.getName());
let m2=require(`./module_1`);
console.log(m2.getName());