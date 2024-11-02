// Q1:

function Player(name){
    this.name=name;
    this.lvl=1;
    this.points=0;
    
   Player.prototype.gainxp= function(number) {
      if (points < 1 || points > 10) {
         console.log("Points should be between 1 and 10.");
         return;
     }
 
     this.points += points;
     while (this.points >= 10) {
         this.lvl += 1;
         this.points -= 10;
     }
   }
   Player.prototype.describe = function() {
      console.log(`Name: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`);
  };
  
  // Example
  let player1 = new Player("Aduri");
  player1.gainXp(5);
  player1.gainXp(7);
  player1.describe();
}

// Q2:
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(" Website data view");
    }
}

// Example
const user = new User("Student", "student@collegemail.com");
user.viewData();

// Q3:
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        console.log(" Website data view");
    }
}

// Example
const admin = new Admin("Student", "student@collegemail.com");
admin.viewData(); // Output: For Viewing 
admin.editData(); // Output: For Editing
