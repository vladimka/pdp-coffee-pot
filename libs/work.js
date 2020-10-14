class Work{
	constructor(){
		this.tasks = 5;
	}

	hasWork(){
		return this.tasks > 0;
	}

	execute(){
		if(this.hasWork() == false)
			throw new Error('no work');

		console.log('1 task done! ' + --this.tasks + ' remain');
	}
}

module.exports = Work;