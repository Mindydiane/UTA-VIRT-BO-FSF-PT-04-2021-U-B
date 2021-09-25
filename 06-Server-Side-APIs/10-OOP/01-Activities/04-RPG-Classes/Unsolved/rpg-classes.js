// Paste your code from the previous activity `03-RPG-Prototypes`
class Character(name, strength, hitpoints) {
  constructor(name, strength, hitpoints)
  this.name = name;
  this.strength = strength;
  this.hitpoints = hitpoints;
}
// Create a prototype method called `printStats()` which prints all of the stats for a character
printStats() {
  console.log(
    "Name: " +
      this.name +
      "\nStrength: " +
      this.strength +
      "\nHitPoints: " +
      this.hitpoints
  );
  console.log("\n-------------\n");
};
// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their hitpoints are above or below zero
isAlive() {
  if (this.hitpoints > 0) {
    console.log(this.name + " is still alive!");
    console.log("\n-------------\n");
  } else {
    console.log(this.name + " has died!");
  }
};
// Create a prototype method called `attack()` which takes in a second character
// and subtracts this character's strength from their hitpoints
attack(opponent) {
  opponent.hitpoints -= this.strength;
  console.log(this.name + " attacked " + opponent.name + "!!");
  console.log("\n-------------\n");
};
// =============================================================
let warrior = new Character("Crusher", 10, 50);
let rogue = new Character("Dodger", 20, 50);
warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
// Convert the constructor function, including the prototype methods, to ES6 Classes.

// =============================================================

// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.

// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.
