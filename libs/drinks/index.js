const Drink = require('./drink');
const Refiller = require('./refiller');

module.exports = {
	coffee : new Drink('Coffee'),
	tea : new Drink('Tea', new Refiller('Tea Pot'))
}