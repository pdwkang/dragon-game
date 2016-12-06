var dragonHp = 100;

function rollDice(){

	var randomDie1 = Math.ceil(Math.random() * 6)
	var randomDie2 = Math.ceil(Math.random() * 6)
	console.log(randomDie1);
	console.log(randomDie2);

	document.images.die1.src = "d" + randomDie1 + ".gif"
	document.images.die2.src = "d" + randomDie2 + ".gif"
	var attack = randomDie1 + randomDie2
	// document.getElementById("userRoll").innerHTML = randomDie1 + randomDie2
	document.getElementById("jumbotron").innerHTML = 
		"You rolled " + attack + "!<br>You did " + (attack*100) +" damage!"
	document.images.hero.src="mario-attack.jpg"
	$('#mario').animate({'marginRight' : "-=15%"})
	$('#mario').animate({'marginLeft' : "-=150%"})
	$('#mario').animate({'marginRight' : "-=135%"})

	dragonHp -= attack * 2;

	if(dragonHp<=0){
		document.getElementById("jumbotron").innerHTML = 
			"You have slain<br>the Dragon!";
			dragonHp = 0;
			document.getElementById("dragon").className= "hidden";
			document.getElementById("healthBar").style.width= dragonHp + "%";
			document.getElementById("healthBar").innerHTML= (dragonHp * 50)
	}else{
		document.getElementById("healthBar").style.width= dragonHp + "%";
		document.getElementById("healthBar").innerHTML= (dragonHp * 50) + " / 5000"
	}

}

function fight(){
	document.getElementById("mario").className = "mario-margin"
	document.getElementById("showGame").className = "col-sm-12"
	document.getElementById("hideInput").className = "hidden"
	document.getElementById("jumbotron").innerHTML = 
		"Roll the dice<br>to attack the Dragon!"
}

function flight(){
	document.getElementById("hideInput").className = "hidden"
	document.getElementById("bg-red2").className = "hidden"
	document.images.hero.src="mario-flight.jpg"
	$('#mario').animate({'marginLeft' : "-=200px"})
	$('#mario').animate({'marginRight' : "-=100px"})
	$('#mario').animate({'marginRight' : "-=1000px"})
	document.getElementById("jumbotron").innerHTML = 
		"Run away and<br>Fight the Dragon later!"
}

