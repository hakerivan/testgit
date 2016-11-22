var calc = require('../lib/calc');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('calc:',calc.sum(1,2,3,4,5,6,7,8,9,10));

  var person = new Person();
  person.think(function(){
      console.log('Thinking 5 seconds, get the right answer!');
  });
  person.answer();
  res.render('index', { title: 'Express' });
});

module.exports = router;

function Person(){
  this.think = function(callback){
    setTimeout(function(){
      console.log('I am thinking~~~~!!!');
      callback();
    },5000)
  }

  this.answer = function(){
    console.log('I am answering other question!');
  }
}