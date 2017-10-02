
function ClozeCard(text, cloze){
	this.cloze = cloze;
	this.partial = function(){
		// consoleLog error message if user didn't type cloze text
		if (this.cloze === undefined){
			console.log("This does't work");
		}
		else {
			var words = this.fullText.split(this.cloze);
			// console.log(words);
			for (var i=0; i<words.length; i++){
				if(words[i] === ""){
					words[i] = " ... ";
				}
			}
			// console.log(words);
			var partialWords = "";
			for (var i=0; i<words.length; i++){
				partialWords += words[i];
			}
			console.log("---Partial text---");
			console.log(partialWords);
		}

	};
	this.fullText = text;
};

module.exports = ClozeCard;