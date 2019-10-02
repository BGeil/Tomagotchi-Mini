
// class
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = (Math.floor(Math.random() * 9) + 1);
		this.sleepiness = (Math.floor(Math.random() * 9) + 1);
		this.boredom = (Math.floor(Math.random() * 9) + 1);
	}
//	die()
//	sleep()
};



// game logic
const game = {

	time: 0,

	tomagotchiBorn: null,


	spawnTomagotchi: function(name) {
		$(`form`).hide();
		
		this.tomagotchiBorn = new Tomagotchi(name);
		$(`.tomaHome`).append(this.tomagotchiBorn);
		console.log(this.tomagotchiBorn);

		this.tomagotchiStats();

		this.incrementTime()

	},

	tomagotchiStats: function() {
		 
		$('#name').text(this.tomagotchiBorn.name);
		$('#age').text(this.tomagotchiBorn.age);
		$('#hunger').text(`${this.tomagotchiBorn.hunger} \n`);
		$('#sleepiness').text(`${this.tomagotchiBorn.sleepiness} \n`);
		$('#boredom').text(`${this.tomagotchiBorn.boredom} \n`);
		 
	},

	incrementTime: function() {
		
		const interval = setInterval(() => {
		 	this.time++;
		 	$('#time').text(this.time);
		 	console.log("we are in the interval");
		 	console.log(this.time);
			
		 	if (this.time % 60 === 0) {
				this.tomagotchiBorn.age += 1;
				this.tomagotchiStats();
		 	}else if(this.time % 25 === 0) {
		 		this.tomagotchiBorn.hunger += 1;
		 		this.tomagotchiStats();
		 	}else if(this.time % 20 === 0) {
		 		this.tomagotchiBorn.sleepiness += 1;
		 		this.tomagotchiStats();
		 	}else if(this.time % 15 === 0) {
		 		this.tomagotchiBorn.boredom += 1;
		 		this.tomagotchiStats();
		 	} 
		}, 1000);	 
	}
 }

// listeners
$('form').on('submit', (e) => {
  event.preventDefault();
  const tomaName = $('#input-box').val();
  game.spawnTomagotchi(tomaName); 
});

















