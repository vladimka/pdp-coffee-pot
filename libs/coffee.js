class Coffee{
	constructor(pot){
		this.state = 'full';
		this.pot = pot;
	}

	drink(){
		if(this.state == 'empty')
			throw new Error('Coffee cup is empty!');

		this.state = 'empty';
		console.log('drink');
	}

	brew(){
		if(this.state == 'full')
			throw new Error('Coffe cup is full');

		if(this.pot.state == 'empty')
			throw new Error('CoffeePot is empty');

		this.pot.state = 'empty';
		this.state = 'full';
		console.log('brew');
	}
}

module.exports = Coffee;