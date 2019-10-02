console.log("test");




// class
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = (Math.floor(Math.random() * 10) + 1);
		this.sleepiness = (Math.floor(Math.random() * 10) + 1);
		this.boredom = (Math.floor(Math.random() * 10) + 1);
	}
//	die()
//	sleep()
};

// listeners
$('form').on('submit', (e) => {
  event.preventDefault();
  console.log('button works')
  const tomaName = $('#input-box').val();
  game.spawnTomagotchi(tomaName);
});

// game logic
const game = {

	time: 10,

	spawnTomagotchi:function(name) {
		const tomagotchiBorn = new Tomagotchi(name);
		let tomaStats = '';
		$(`.tomaHome`).append(tomagotchiBorn);
		
		console.log(tomagotchiBorn);
		


		tomaStats = $(`<div class="stats"><h2>Your Tomagotchi's hunger is: ${tomagotchiBorn.hunger}</h2></div> \n` +  `<div class="stats"><h2>Your Tomagotchi's sleepiness is: ${tomagotchiBorn.hunger}</h2></div> \n` + `<div class="stats"><h2>Your Tomagotchi's hunger is: ${tomagotchiBorn.boredom}</h2></div> \n` )
		$('.tomaHome').append(tomaStats);
		$('.tomaHome').append(`<h2>The Current time is: ${this.time}</h2>`)
	 	

		//console.log(tomagotchiBorn);
	}
}



