class Drink{
	constructor(name, refiller){
		this.state = 'full';
		this.refiller = refiller;
		this.name = name;
	}

	drink(){
		if(this.state == 'empty')
			this.brew();

		this.state = 'empty';
	}

	brew(){
		if(this.refiller != undefined)
			if(this.refiller.state == 'empty')
				this.refiller.refill();

		if(this.state == 'full')
			throw new Error(this.name + ' is full');

		this.refiller.state = 'empty';
		this.state = 'full';
	}
}

module.exports = Drink;