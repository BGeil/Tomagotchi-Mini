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
		tomaStats = $(`<div>Your Tomagotchi's hunger is ${tomagotchiBorn.hunger}</div> \n` +  `<div>Your Tomagotchi's sleepiness is ${tomagotchiBorn.hunger}</div> \n` + `<div>Your Tomagotchi's hunger is ${tomagotchiBorn.boredom}</div> \n` )
		$('.tomaHome').append(tomaStats);
		// $('header').append(`${game.time}`)
		

		console.log(tomagotchiBorn);
	}
}



