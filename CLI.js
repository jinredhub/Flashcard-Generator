
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var cardType = process.argv[2];
var txt1 = process.argv[3];
var txt2 = process.argv[4];

if (cardType === "Basic"){
	var newBasicCard = new BasicCard(txt1, txt2);
	console.log("---front text---");
	console.log(newBasicCard.front);
	console.log("---back text---");
	console.log(newBasicCard.back);
}
else {
	var newClozeCard = new ClozeCard(txt1, txt2);
	newClozeCard.partial();
	console.log("---Full text---");
	console.log(newClozeCard.fullText);
	console.log("---Cloze text---");
	console.log(newClozeCard.cloze);
}
