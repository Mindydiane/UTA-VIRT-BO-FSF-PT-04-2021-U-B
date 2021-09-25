// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  };
    // Add a `setBalance()` function
    this.setBalance = function (num) {
      this.balance = num;
    }

    // Add a `deposit()` function
    this.deposit = function (num){
      if (num > 0) {
        this.balance += num;
      }
    else { 
      console.log("Error: cant withdraw nothing or a negative amount")
    }}

    // Add a `withdraw()` function
    this.withdraw = function (num){
      if (num <= 0){
        console.log("Error: cant withdraw nothing or a negative amount");
      }
    }

    this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    };
}

// =============================================================
// PART 2

// Create a new `bank` object
let bank = new MiniBank(100);
// Print the `bank` balance
bank.printBalance();
// Deposit some money and then print the `bank` balance
bank.deposit(50);
bank.printBalance();
// Withdraw some money and then print the `bank` balance
bank.withdraw(20);
// bank.printBalance();