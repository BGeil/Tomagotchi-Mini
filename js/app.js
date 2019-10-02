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

	time: 0,

	tomagotchiBorn: {},


	spawnTomagotchi: function(name) {
		$(`form`).hide();
		
		this.tomagotchiBorn = new Tomagotchi(name);
		$(`.tomaHome`).append(this.tomagotchiBorn);
		console.log(this.tomagotchiBorn);

		this.tomagotchiStats();

	},

	tomagotchiStats: function() {
		 
		 $('#name').append(`${this.tomagotchiBorn.name} \n`);
		 $('#age').append(`${this.tomagotchiBorn.age} \n`);
		 $('#hunger').append(`${this.tomagotchiBorn.hunger} \n`);
		 $('#sleepiness').append(`${this.tomagotchiBorn.sleepiness} \n`);
		 $('#boredom').append(`${this.tomagotchiBorn.boredom} \n`);

	     this.incrementTime();
	},

	incrementTime: function() {

		const interval = setInterval(() => {
			this.time++;
		 	if (this.time % 2 === 0) {
 
		 		// clearinterval(interval);
		 	 this.tomagotchiBorn.age += 1;

		 		this.tomagotchiStats();
		 	} else if(this.time % 2 === 1) {
		 		
 

		 		console.log('this is working?');

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


// let tomaStats = '';
// 		tomaStats = $(`<div class="stats"><h2>${this.tomagotchiBorn.name}'s age is: ${this.tomagotchiBorn.age}</h2></div> \n` + `<div class="stats"><h2>${this.tomagotchiBorn.name} hunger is: ${this.tomagotchiBorn.hunger}</h2></div> \n` +  `<div class="stats"><h2>${this.tomagotchiBorn.name} sleepiness is: ${this.tomagotchiBorn.hunger}</h2></div> \n` + `<div class="stats"><h2>${this.tomagotchiBorn.name} boredom is: ${this.tomagotchiBorn.boredom}</h2></div> \n`)
// 		$('.tomaHome').append(tomaStats);

// 			this.incrementTime();















