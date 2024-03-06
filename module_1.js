// let add=(a,b)=>{
//     return a+b;
// }
// module.exports = add;
class m1{
    constructor(a){
        this.name=a;
    }
    getName(){
        return this.name;
    }
    setName(a){
        this.name=a;
    }
}
module.exports =new m1(`batman`);