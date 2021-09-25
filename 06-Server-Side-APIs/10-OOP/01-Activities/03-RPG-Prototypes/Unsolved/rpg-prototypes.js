// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
function Character(name, strength, hitpoints){
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
    
}
const person = new Character('bob', 80, 2)


// Create a prototype method called `printStats()` which prints all of the stats for a character
Character.prototype.getStats = function() {
    console.log(`name:` + 
    this.name + 
    `\nStrength` + 
    this.strength + 
    `/nHitpoints` + 
    this.hitpoints 
 );
 console.log('\n-----------/n');
};
person.getStats()
// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
Characters.prototype.isAlive = function() {
    if (this.hitpoint)
}

// Create a prototype method called `attack()` which takes in a second character
// and subtracts this character's `strength` from their `hitpoints`
Character.prototype.attack = function() {
    
}

// =============================================================

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
