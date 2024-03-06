// let sub=(a,b)=>{return a-b;};
// module.exports = sub;
class m2{
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
module.exports =new m2(`superman`);