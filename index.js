const { tea } = require('./libs/drinks');
const Work = require('./libs/work');

const work = new Work();

while(work.hasWork()){
	tea.drink();
	work.execute();
}