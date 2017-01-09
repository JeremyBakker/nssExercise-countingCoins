//Initialize a coin counting function
function coinCounter (amount) {
  
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  // convert amount to a whole number (1.23 = 123)
  amount = amount * 100; 

  // 123 % 25 = 23 = remaining change to be calculated after pulling a multiple of 25 (quarter)
  var remainderAfterQuarters = amount % 25; 
  // (123 - 23) / 25 = 100 = 4 quarters  
  var quarters = (amount - remainderAfterQuarters) / 25; 
  // add the number of quarters to the array  
  coinPurse.quarters = quarters;

  // 23 % 10 = 3 = remaining change to be calculated after pulling a multiple of ten (dime)
  var remainderAfterDimes = remainderAfterQuarters % 10; 
  // (23 - 3) / 10 = 20 = 2 dimes
  var dimes = (remainderAfterQuarters - remainderAfterDimes) / 10; 
  // add the number of dimes to the array
  coinPurse.dimes = dimes;

  // 3 % 5 = 3 = remaing change to be calculate after pulling a multiple of 5 (nickel)
  var remainderAfterNickels = remainderAfterDimes % 5 
  // (3 - 3) / 5 = 0 = 0 nickels
  var nickels = (remainderAfterDimes - remainderAfterNickels) / 5 
  // add the number of nickels to the array
  coinPurse.nickels = nickels;
  
  // the remaining change equals the number of pennies
  coinPurse.pennies = remainderAfterNickels; // 3 pennies

  // return the array
  return coinPurse;
}

var coins = coinCounter(1.23)
console.log(coins);
