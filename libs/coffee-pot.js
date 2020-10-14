class CoffeePot{
	constructor(){
		this.state = 'full';
	}

	refill(){
		if(this.state == 'full')
			throw new Error('Coffe pot is full');

		this.state = 'full';
		console.log('refill');
	}
}

module.exports = CoffeePot;