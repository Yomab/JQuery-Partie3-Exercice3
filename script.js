$(function() {
console.log( "ready!" );
});
var random = 1+ Math.floor(Math.random() * 100);
$("#Bouton").click(function(){
var nbrUser = Number($('#proposition').val());
console.log(random);
if (random == nbrUser) {
  alert ('Bien joué');
} else if (nbrUser < random){
  alert ('plus!');
} else {
  alert ('moins!');
}
});
