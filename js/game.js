let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();

  }, 
  //Choose the player!
  resetPlayer: function(classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Rogue":
          player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Mage":
          player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Hunter":
          player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    //Change the desire when selecting a player
    let getInterface = document.querySelector(".interface");
    /* getInterface.innerHTML = '<img src="img/game' + 
    classType.toLowerCase() + '.jpg" class="img-avatar"> <div> <h3>' + classType +
    '</h3> <p>Health: ' + player.health + '</p> <p>Mansa: ' + player.mana + 
    '</p> <p>Strenght: ' + player.strenght + '</p> <p>Agility: ' + player.agility 
    + '</p> <p> Speed: ' + player.speed + '</p> </div>'; */

    getInterface.innerHTML = '<img src="img/game' + 
    classType.toLowerCase() + '.jpg" class="img-avatar"> <div> <h3>' + classType +
    '</h3> <p class="health-player">Health: ' + player.health + '</p> <p>Mansa: ' + player.mana + 
    '</p> <p>Strenght: ' + player.strength + '</p> <p>Agility: ' + player.agility 
    + '</p> <p> Speed: ' + player.speed + '</p> </div>';
  },
  //Step 2 when you have choose a player
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    getHeader.innerHTML = '<p> Task: Find an enemy! </p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onClick="GameManager.setFight()">Search for an Enemy </a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // create enemy!
    let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
    let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
    //choose a random mnumber 1-0
    let chooseRandomEnemy = Math.floor(Math.random()  * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task Choose you move!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onClick="PlayeMoves.calcAttack()">Attack! </a>'
    getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.classType.toLowerCase() + 
    '.png" alt="' + enemy.classType + '" class="img-avatar"><div><h3>' + enemy.classType + 
    '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + 
    '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';



    
  },
}