let fastMode = true
// class
class Tomagotchi {
    constructor(name) {
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

    isLightsOn: true,


    spawnTomagotchi: function(name) {
        $(`form`).hide();
        $('.stats').show();
        $('.feed').show();
        $('.sleepTime').show();
        //$('timeToWakeUp').show();
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

            if (this.time % 60 === 0) {
                this.tomagotchiBorn.age += 1;
                this.itsMorphingTime();
            }
            if (this.time % 25 === 0) {
                this.tomagotchiBorn.hunger += 1;
            }




            if (this.time % 2 === 0) {
                if (this.isLightsOn === true) {
                    this.tomagotchiBorn.sleepiness += 1;
                } else {
                    this.tomagotchiBorn.sleepiness -= 1;
                    if (this.tomagotchiBorn.sleepiness <= -1) {
                        this.tomagotchiBorn.sleepiness += 1;
                    }
                }



            }
            if (this.time % 15 === 0) {
                this.tomagotchiBorn.boredom += 1;
            }
            this.tomagotchiStats();

            if (
                this.tomagotchiBorn.hunger >= 10 ||
                this.tomagotchiBorn.sleepiness >= 10 ||
                this.tomagotchiBorn.boredom >= 10
            ) {

                this.isItDead();
            }

            this.time++;
        }, fastMode ? 300 : 1000); // for testing purposes

    },

    isItDead: function() {
        $('.stats').hide();
        $('.feed').hide();
        $('.sleepTime').hide();
        $('.playTime').hide();
        $('.timeToWakeUp').hide();
        $('.deadOrAlive').show();
        this.tomagotchiBorn.alive = false;
        if (this.tomagotchiBorn.alive === false) {
            $('.shodan').removeClass(`animate`).addClass('shodan-dead');
        }
        clearInterval(this.interval);

    },

    itsMorphingTime: function() {
        if (this.tomagotchiBorn.age === 1) {
            $('.shodan').attr('src', "img/adultshodan.gif")
        }
    },

    feedingTime: function() {
        this.tomagotchiBorn.hunger -= 1;
        this.tomagotchiStats();

        if (this.tomagotchiBorn.hunger <= 0) {
            this.tomagotchiBorn.hunger += 1;
        }
    },
    timeToPlay: function() {
        this.tomagotchiBorn.boredom -= 1;
        this.tomagotchiStats();
        if (this.tomagotchiBorn.boredom <= 0) {
            this.tomagotchiBorn.boredom += 1;
        }
    },

    lightsOff: function() {

        // change lights boolean to make them off


        this.isLightsOn = false;
        $('.sleepTime').hide();
        $('.timeToWakeUp').show();

    },


    lightsOn: function() {
        // change liughts boole to make them on
        this.isLightsOn = true;
        $('.timeToWakeUp').hide();
        $('.sleepTime').show();
    },


}
// listeners
$('form').on('submit', (e) => {
    event.preventDefault();
    const tomaName = $('#input-box').val();
    game.spawnTomagotchi(tomaName);
});

// feed button
$('.feed').on('click', () => {
    game.feedingTime();
});

// turn off lights
$('.sleepTime').on('click', () => {
    game.lightsOff();
});

$('.timeToWakeUp').on('click', () => {
    game.lightsOn();
});

// play with tomagotchi
$('.playTime').on('click', () => {
    game.timeToPlay();
});