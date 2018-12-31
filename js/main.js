console.log("up and running");
var photos = [
	{
		rank : "before",
		image : "images/before.png"
	},
	{
		rank : "Meisam",
		image : "images/meisam.jpeg"
	},
	{
		rank : "after",
		image : "images/after.png"
	}
];

var cardsInPlay = [];

var createBoard = function () {
	for ( var i = 1; i <= photos.length; i++ ){
		var cardElement = document.createElement("img");
		cardElement.setAttribute ("src", "images/back.jpg");
		cardElement.setAttribute ("data-id", i);
		cardElement.addEventListener ("click", flipCard);
		document.getElementById ("game-board").appendChild(cardElement);
	}
	
}

var checkForMatch = function () {
	if ( cardsInPlay[0].rank === "Meisam" )
		alert("You did it!");
	else 
		alert("Sorry try agian!");
}

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped" + photos[cardId].rank);
	console.log(photos[cardId].image);
	cardsInPlay.push(photos[cardId].rank);
	this.setAttribute('src', photos[cardId].image);
	if ( cardsInPlay.length === 1) {
		checkForMatch();
	}
}
createBoard();
