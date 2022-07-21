var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;

// var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// //this function will populate 'deck' array with 52 card objects in total.
// function getDeck() 
// {
//     let deck = new Array();

//     // loop through suits
//     for(let i = 0; i < suits.length; i++)
//     {   //loop through values A - K
//         for(let x = 0; x < values.length; x++)
//         {
//             let card = {Value: values[x], Suit: suits[i]};
//             // Once card is found, push card object to deck variable
//             deck.push(card);
//         }
//     }

//     return deck;
// }

// var deck = [{Value: 'A', Suit: 'Spades'}, {Value: 'A', Suit: 'Diamonds'}, {Value: 'A', Suit: 'Clubs'}...]

// // let's shuffle the deck
//     // for 1000 turns
//     // switch the values of the two random cards
// function shuffle(deck)
// {
// 	// for 1000 turns
// 	// switch the values of two random cards
// 	for (let i = 0; i < 1000; i++)
// 	{
// 		let location1 = Math.floor((Math.random() * deck.length));
// 		let location2 = Math.floor((Math.random() * deck.length));
// 		let tmp = deck[location1];

// 		deck[location1] = deck[location2];
// 		deck[location2] = tmp;
// 	}
// }
// // iterate through each card object in the deck array and create DOM elements on the webpage using the createELement function
// function renderDeck(deck)
// {
//       document.getElementById("deck").innerHTML = "";

// 	for(let i = 0; i < deck.length; i++)
// 	{
// 		let card = document.createElement("div");
// 		let value = document.createElement("div");
// 		let suit = document.createElement("div");
// 		card.className = "card";
// 		value.className = "value";
// 		suit.className = "suit " + deck[i].Suit;

// 		value.innerHTML = deck[i].Value;
// 		card.appendChild(value);
// 		card.appendChild(suit);

// 		document.getElementById("deck").appendChild(card);
// 	}
// }