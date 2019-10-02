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



// game logic
const game = {

	time: 10,

	tomagotchiBorn: {},


	spawnTomagotchi: function(name) {
		$(`form`).hide();
		this.tomagotchiBorn = new Tomagotchi(name);
		
		$(`.tomaHome`).append(this.tomagotchiBorn);
		
		console.log(this.tomagotchiBorn);
		
		this.tomagotchiStats();

	},

	tomagotchiStats: function() {
		let tomaStats = '';
		tomaStats = $(`<div class="stats"><h2>${this.tomagotchiBorn.name}'s age is: ${this.tomagotchiBorn.age}</h2></div> \n` + `<div class="stats"><h2>${this.tomagotchiBorn.name} hunger is: ${this.tomagotchiBorn.hunger}</h2></div> \n` +  `<div class="stats"><h2>${this.tomagotchiBorn.name} sleepiness is: ${this.tomagotchiBorn.hunger}</h2></div> \n` + `<div class="stats"><h2>${this.tomagotchiBorn.name} boredom is: ${this.tomagotchiBorn.boredom}</h2></div> \n`)
		
		$('.tomaHome').append(tomaStats);

			this.incrementTime();
	},

	incrementTime: function() {
		const interval = setInterval(() => {
		 	if (this.time === 20) {
		 		clearinterval(interval);
		 	} else {
		 		// make him tireder etc




		 		this.time++;
		 	}
		 	$('.time').html( `<div class="time"><h2>The time is: ${this.time}</h2></div>`)
		}, 1000);
		 
	}
}

// listeners
$('form').on('submit', (e) => {
  event.preventDefault();
  console.log('button works')
  
  const tomaName = $('#input-box').val();

  game.spawnTomagotchi(tomaName);
  
});

