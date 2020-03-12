//user has the reference to the object
let user={name:'ali'};
user.name=null;
console.log(user.name);
//two references
let usr={name:'tharani'};
let admin=usr;
usr.name=null;
console.log(admin.name);
console.log(usr.name);
//interlinked objects....
function marry(man,woman){
    console.log(woman.husband=man);
    console.log(man.wife=woman);
    return{
        father:man,
        mother:woman
    }
}
let family=marry({name:'john'},{name:'ann'});
console.log(family.father);
delete family.father;
delete family.mother.husband;
console.log(family.father);
console.log(family.mother.husband);
//reference counting algorithm...
function f(){
    var x={};
    var y={};
    //x references y..
    x.a=y;
    //y references x..
    y.a=x;
    console.log("Good");
}
f();