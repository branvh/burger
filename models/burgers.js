//let db = require('connections.js');

let orm = require('../config/orm.js');

let burger = {
	allBurgers: (callback) => {
		orm.all('burger', (res) => {
			callback(res);
		});
	},
	createBurger: (queryColumns, values, callback) => {
		orm.create('burger', queryColumns, values, (res) => {
			callback(res);
		});
	},
	changeBurger: (objValues, queryCondition, callback) => {
		orm.update('burger', objValues, condition, (res) => {
			callback(res);
		});
	}
};

module.exports = burger;