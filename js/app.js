console.log("test");


class Tomagotchi {
	constructor(){
		this.age = (Math.floor(Math.random() * 10) + 1);
		this.hunger = (Math.floor(Math.random() * 10) + 1);
		this.sleepiness = (Math.floor(Math.random() * 10) + 1);
		this.boredom = (Math.floor(Math.random() * 10) + 1);
	}
//	die()

//	sleep()


};


// listeners

function tomagotchiTime() {
	game.spawnToma();
}








// game logic
const game = {

	time: null,

	spawnToma:function() {
		const tomagotchiBorn = new Tomagotchi();
		console.log(tomagotchiBorn);
	}
}



tomagotchiTime();