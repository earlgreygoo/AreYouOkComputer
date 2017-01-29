




markov = new RiMarkov(10);


markov.loadText(badString);
markov.loadText(radString);
markov.loadText(sisy);
markov.loadText(sadString);
markov.loadText(cummings);
markov.loadText(breakUp);







var randomNum = function(){
	return Math.floor((Math.random() * 15) + 1);
}






var poemJoined = function(inputArr){
	var output = ""
	for (var i = 0; i < inputArr.length; i++){
		output += inputArr[i]
	}
	return output
}








makePoem = function(inputString) {
	var string = new RiString(inputString);
	var splitString = string._text.split(" ");
	var parsedString = RiTa.getPosTags(inputString)
	var lexicon = new RiLexicon()
	var output = ""
	for(var i = 0; i < splitString.length; i++) {
		if(i % 4 === 0){
			output += lexicon.randomWord(parsedString[i]) + " ";
		}
		else {
			output += splitString[i] + " ";
		}
		
	}

	console.log(output)

	return(output)

}






 var splitPoem = function(inputText){
    	var splitText = inputText.split(" ");
    	var output = ""
    	for (var i = 0; i < splitText.length; i++){
    		var spacer = randomNum()
    		
    		if (splitText[i].indexOf(".") !== -1) {

    			output += "<span style='margin:" + spacer + "px;'>" + splitText[i] + "</span> <p></p>"
    		}
    		else { 
    		output += "<span style='margin:" + spacer + "px;'>" + splitText[i] + "</span>"
    	}
    	}
    	return output;
    }







var runPoem = function() {




	var talker = window.speechSynthesis

	console.log("aaah")
	var lines = markov.generateSentences(3);
	var tester = poemJoined(lines);
	var aaah = makePoem(tester);

	var ok = new SpeechSynthesisUtterance(aaah);
	ok.voice = "Albert"
	ok.pitch = -2;
	ok.rate = .7;
	talker.speak(ok);
    var poem = document.querySelector("#poem");
    
    var saaad = splitPoem(lines.join(" "));

    var testing = splitPoem(aaah);

    poem.innerHTML = testing;
   
   

//
}


function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}






window.onload = function() {

	document.addEventListener("click",function(){requestFullScreen(document.body)});
	setInterval(runPoem,30000);
}





