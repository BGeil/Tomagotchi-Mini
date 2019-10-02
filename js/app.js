console.log("test");




// class
class Tomagotchi {
	constructor(){
		this.name = '';
		this.age = 0;
		this.hunger = (Math.floor(Math.random() * 10) + 1);
		this.sleepiness = (Math.floor(Math.random() * 10) + 1);
		this.boredom = (Math.floor(Math.random() * 10) + 1);
	}
//	die()
//	sleep()
};

// listeners
$('.startGame').on('click', () => {
  console.log('button works')
 
  game.spawnTomagotchi();
  
});

// game logic
const game = {

	time: 10,

	spawnTomagotchi:function() {
		const tomagotchiBorn = new Tomagotchi();
		let tomaStats = '';
		
		$(`.tomaHome`).append(tomagotchiBorn);
		const tomaName = prompt("What is the name of your Tomagotchi?")
		tomagotchiBorn.name.push(tomaName);
		console.log(typeof tomaName);
		console.log(tomagotchiBorn);
		


		tomaStats = $(`<div class="stats"><h2>Your Tomagotchi's hunger is: ${tomagotchiBorn.hunger}</h2></div> \n` +  `<div class="stats"><h2>Your Tomagotchi's sleepiness is: ${tomagotchiBorn.hunger}</h2></div> \n` + `<div class="stats"><h2>Your Tomagotchi's hunger is: ${tomagotchiBorn.boredom}</h2></div> \n` )
		$('.tomaHome').append(tomaStats);
		$('.tomaHome').append(`<h2>The Current time is: ${this.time}</h2>`)
	 	

		console.log(tomagotchiBorn);
	}
}



