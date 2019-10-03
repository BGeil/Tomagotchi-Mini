let fastMode = true
// class
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = (Math.floor(Math.random() * 9) + 1);
		this.sleepiness = (Math.floor(Math.random() * 9) + 1);
		this.boredom = (Math.floor(Math.random() * 9) + 1);
		this.alive = true;
	}
};



// game logic
const game = {

	time: 1,

	tomagotchiBorn: null,

	interval: null,


	spawnTomagotchi: function(name) {
		$(`form`).hide();
		$('.stats').show();
		$('.feed').show();
		$('.sleepTime').show();
		$('.playTime').show();
		this.tomagotchiBorn = new Tomagotchi(name);
		$(`.tomaHome`).append(this.tomagotchiBorn);
		console.log(this.tomagotchiBorn);

		this.tomagotchiStats();

		this.incrementTime();

	},

	tomagotchiStats: function() {
		 
		$('#name').text(this.tomagotchiBorn.name);
		$('#age').text(this.tomagotchiBorn.age);
		$('#hunger').text(`${this.tomagotchiBorn.hunger} \n`);
		$('#sleepiness').text(`${this.tomagotchiBorn.sleepiness} \n`);
		$('#boredom').text(`${this.tomagotchiBorn.boredom} \n`);
		 
	},

	incrementTime: function() {
		
		 this.interval = setInterval(() => {
		 	
		 	$('#time').text(this.time);
		 	
		 	console.log("we are in the interval");
		 	console.log(this.time);
			
		 	if (this.time % 60 === 0) {
				this.tomagotchiBorn.age += 1;
				this.tomagotchiStats();
				this.itsMorphingTime();
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

		 	if(this.tomagotchiBorn.hunger >= 10) {
		 		this.isItDead();
		 	}else if(this.tomagotchiBorn.sleepiness >= 10) {
		 		this.isItDead();
		 	}else if(this.tomagotchiBorn.boredom >= 10) {
		 		this.isItDead();
		 	}
		 	this.time++;
		}, fastMode ? 100 : 1000); // for testing purposes
		 
	},

	isItDead: function() {
		$('.stats').hide();
		$('.feed').hide();
		$('.sleepTime').hide();
		$('.playTime').hide();
		$('.deadOrAlive').show();
		// PUT A BIG RED X
		this.tomagotchiBorn.alive = false;
		clearInterval(this.interval);

	},
	itsMorphingTime: function() {
		if(this.tomagotchiBorn.age === 1) {
			$('.shodan').replaceWith(`<img class="shodan" src="adultshodan.gif">`)
		}
	}



	
 }
// listeners
$('form').on('submit', (e) => {
  event.preventDefault();
  const tomaName = $('#input-box').val();
  game.spawnTomagotchi(tomaName); 
 
});

// feed button
$('.feed').on('click', () => {
		game.tomagotchiBorn.hunger -= 1;
		game.tomagotchiStats();
		if (game.tomagotchiBorn.hunger <= 0) {
			game.tomagotchiBorn.hunger += 1;
		}
	});
// turn off lights
$('.sleepTime').on('click', () => {
		game.tomagotchiBorn.sleepiness -= 1;
		game.tomagotchiStats();
		if (game.tomagotchiBorn.sleepiness <= 0) {
			game.tomagotchiBorn.sleepiness += 1;
		}
	});
// play with tomagotchi
$('.playTime').on('click', () => {
		game.tomagotchiBorn.boredom -= 1;
		game.tomagotchiStats();
		if (game.tomagotchiBorn.boredom <= 0) {
			game.tomagotchiBorn.boredom += 1;
		}
	});












