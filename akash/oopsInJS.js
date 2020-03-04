/**
 * 
 * OOPS in Javascript : class, object, inheritance, constructor, prototypes, subclasses
 * 
 * @author Akaash
 * @version 1.0
 * @since 04/03/2020
 */

//Constructor
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

//Prototypes
Book.prototype.getSummary = function () {
    console.log(`${this.name} is written by ${this.author} in the year ${this.year}`);
}

Book.prototype.revise = function (newYear) {
    this.year = newYear
    console.log(`${this.name} is revised`)
    this.revised = true
}

const book1 = new Book('OOPS', 'Arun', 2013);
const book2 = new Book('DS', 'Benial', 2016);

//Prototype Inheritance : Magazine inherits from Book
Magazine.prototype = Object.create(Book.prototype) //prototype of book is assigned to magazine's prototype
function Magazine(name, author, year, month) {
    Book.call(this, name, author, year)
    this.month = month
}

const mag = new Magazine('Magazine on OOPS', 'Arun', 2018, 'March')
mag.getSummary()

//Class
class office {
    constructor(officeName, year, city) { //constructor
        this.officeName = officeName
        this.year = year
        this.city = city
    }

    getDetails() {
        console.log(`${this.officeName} is found in the year ${this.year}, located in ${this.city}`)
    }

    getUpdate(tech) {
        console.log(`${this.officeName} is working in ${tech}`)
    }

    //static method inside the class
    static getCaption() {
        console.log(`Calibraint is Awesome`)
    }
}

const myoffice = new office('Calibraint', 2015, 'Chennai')
myoffice.getDetails()
myoffice.getUpdate('Block Chain')
//static methods can be called using the class name itself
office.getCaption()

//SubClasses : Employee inherits from office as base class
class team extends office {
    constructor(name,year,city,teamName){
        super(name,year,city)
        this.teamName = teamName
    }

    getEmpDetails(){
        console.log(`Calibraint is having a wonderful ${this.teamName} team`)
    }
}
 
const ofc = new office('Calibraint',2015,'chennai')

//Instantiate an object for team class
const team1 = new team('Calibraint',2015,'chennai','Mobile')
team1.getEmpDetails()
team1.getDetails()


