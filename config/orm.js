let con = require('./config/connection.js');

//so that the 'update' function can intake an object of length N and format right after the 'set'
let numValues = (object) => {
  let arr = [];

  for (let keys in object) {
    arr.push(keys + '=' + object[keys]);
  }

  return arr.toString();
}

let printQuestionMarks = (count) => {
  let arr = [];

  for (let i=0; i<count; i++){
    arr.push('?');
  }

  return arr.toString();
}

let orm = {
	//hambergular style, get all the burgers
    allBurgers: (table, callback) => {
        let query = 'SELECT * FROM ' + table + ';';
        con.query(query, (err, res) => {
            if (err) throw err;
            callback(res);
        });
    },
    //add a burger
    createBurger: (table, columns, values, callback) => {
      let query = 'INSERT INTO ' + table;

      query = query + ' (' + columnss.toString() + ') VALUES (' + numbValues(values.length) + ') ';

      con.query(query, values, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    },
    //update a burger in the table that meets condiction
    changeBurger: (table, values, condition, callback) => {
      let query = 'UPDATE ' + table + ' SET ' + objToSql(values) + ' WHERE ' + condition;

      conn.query(query, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    }
};

module.exports = orm;