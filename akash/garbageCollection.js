/**
 * This program explains the concept of garbage collection
 * 
 * Garbage Collection refers as the unreachable objects can be garbage collected and also the unreferenced objects
 * are also eligible to garbage collect.
 * 
 * JS have many optimizations to run faster, such as
 *  >Generalational collection
 *  >Incremental collection
 *  >Idle-time collection
 * 
 * @author Akaash
 * @version 1.0
 * @since 02/03/2020
 */
//An object is declared and assigned a property called name
let userName = {
    'name':'Akaash'
};

//Although the userName is unreachable, the object value is reached through the admin variable
let admin = userName;

console.log(userName);

userName = null;

//Now the object userName is unreachable
console.log(userName);
console.log(admin);

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "Dhoni"
  }, {
    name: "Sakshi"
  });

  let AuntFamily = marry({
      name : "Rohit"
  },{
      name : "Shruthi"
  });

  //This actually deletes the mother object entirely
  delete family.mother;
  delete family.father.wife;

  delete AuntFamily.father;
  delete AuntFamily.mother.husband;

  //Here it displays the Husband's object only
  console.log(family);
  console.log(AuntFamily);


  //This part of the code explaines the reference counting
  let obj1 = {
      obj2 :{
          x : 1
      }
  };

  console.log(obj1.obj2);  //In the below parts, all the objects are refered with the object2

  let obj3 = obj1;

  obj1 = 3;

  console.log(obj3);

  let obj4 = obj3.obj2;

  console.log(obj4);

  obj3 = 'assigned Something';
 

  //At this point, object2 is not referred by any of the objects, So it can be garbage collected
  obj4 = null; //Now obj2 can be garbage Collected 

  console.log(obj3); 
  console.log(obj1); 
  console.log(obj4);
  console.log(obj1.obj2); //prints undefinded



