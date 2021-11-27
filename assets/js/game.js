var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);  
  return value;
};

var getPlayerName = function() {
  var name = "";
// ADD LOOP HERE WITH PROMPT AND CONDITION
while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}
  console.log("Your robot's name is " + name);
  return name;
};


var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  }, // comma!
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};
//refillHealth: function () {
  if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }

//upgradeAttack: function() {
  if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];


var fight = function(enemy) {
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
 
    // if player picks "skip" confirm and then stop the loop
   if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
    // subtract money from playerMoney for skipping
    playerInfo.money = playerInfo.money - 10;
    console.log("playerInfo.money", playerInfo.money)
    break;
  }
}
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

 // check enemy's health
 if (enemy.health <= 0) {
  window.alert(enemy.name + ' has died! ');
  
   // award player money for winning
   playerInfo.money = Math.max(0, playerInfo.money - 10);
   
   // leave while() loop since enemy is dead
   break;
  } else {
    window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
  }
  // remove players's health by subtracting the amount set in the enemyAttack variable
  var damage = randomNumber(enemya.ttack - 3, enemya.ttack);

  playerInfo.health = Math.max(0, playerInfo.health - damage);
    enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
  
    
  
  
   // function to start a new game
    var startGame = function() {
      for (var i = 0; i < enemyInfo.length; i++) 
      // reset player stats
      playerInfo.reset();

      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
               debugger

        var pickedEnemyObj = enemyInfo[i];
      
      
         pickedEnemyObj.health = randomNumber(40,60);
         
         fight(pickedEnemyObj);
        

       // add shop; if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // vist the store confirm
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
       // if yes, take them to the store() function
     if (storeConfirm) {
     shop();
    
     }
   }     
      
    
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    
      endGame();
 };
  
 
   // endGame functon
       endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
     
      // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
     // restart the game
        startGame();
    }
    else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };
    
  
  //shop function
  var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action}
    switch (shopOptionPrompt) {
      case "REFILL":
        case "refill":
          playerInfo.refillHealth();
          break;
        case "UPGRADE":
        case "upgrade":
          playerInfo.upgradeAttack();
          break;
  }
};

    


}
startGame();
} 
}