class Refiller{
	constructor(name){
		this.state = 'full';
		this.name = name;
	}

	refill(){
		if(this.state == 'full')
			throw new Error(this.name + ' is full');

		this.state = 'full';
	}
}

module.exports = Refiller;