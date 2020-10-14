const Coffee = require('./libs/coffee');
const CoffeePot = require('./libs/coffee-pot');
const Work = require('./libs/work');

const coffeePot = new CoffeePot();
const coffee = new Coffee(coffeePot);
const work = new Work();

while(work.hasWork()){
	if(coffee.state == "empty"){
		if(coffeePot.state == "empty")
			coffeePot.refill();

		coffee.brew();
	}

	coffee.drink();
	work.execute();
}