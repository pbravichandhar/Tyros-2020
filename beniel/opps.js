// adding properties to constructor
function Constr(name,initial)
{
    this.name=name;
    this.initial=initial;
}
Constr.prototype.age=21;
// parameter constructor in js
var obj=new Constr("beniel","D");
console.log(obj);
console.log(obj.age);
// class creation in js
class parent
{
    constructor(name )
    {
        this.name=name;
    }
    display()
    {
    console.log(this.name);
    }
    static static_function(){
        console.log("static function inside the class");
    }
}
// inheritance from parent to child
class child extends parent
{
    constructor(name)
    {
        super(name);
    }
}

let obj3 = new child("ben");
obj3.display();
// static function inside the class called by classname.function name
parent.static_function();
// constructor stealing
function constructor1(){
    this.carbrands = ['BMW','FORD','AUDI'];
}
function constructor1_sub() {
    constructor1.call(this);
}
let inst=new constructor1_sub();
console.log("car brands "+inst.carbrands);

// inheritance in constructor
function main(name , location){
    this.name =name;
    this.location = location;
}
main.prototype.getvalues=function(){
    console.log(this.name+"   "+this.location);
}
const maii_obj=new main("calibraint","tharamani");

sub.prototype=Object.create(main.prototype);
function sub(name , location,area )
{
    main.call(this,name,location);
    this.area=area;
}
let sub_obj=new sub("calibraint","tharamani");
sub_obj.getvalues();
