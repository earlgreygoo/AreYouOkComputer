



var haiku = "Autumn moonlight a worm digs silently into the chestnut"


//var nflURL = "http://www.nfl.com/liveupdate/game-center/2012020500/2012020500_gtd.json"
														
var nflURL = "http://www.nfl.com/liveupdate/game-center/2016122600/2016122600_gtd.json"
	

gameEid = 2016122600

var playObject = {}	


var playCounter = function(playobject){
		var count = 0
		for(var key in playobject){
			count += 1 
		}
	return count
}


var lastPlay = function(playobject){
	var play = ""
	for (var key in playobject){
		play = key
	}
	return play
}





 $.getJSON( nflURL, {
    format: "json"
  }).then(function(apiResponse){console.log(apiResponse)})


  $.getJSON( nflURL, {
    format: "json"
  }).then(function(response){
  		playObject = response
  		console.log(playObject)
  		console.log(playObject[gameEid])
  		var drive = playObject[gameEid].drives.crntdrv
  		var plays = playObject[gameEid].drives[drive].plays
  		var playLength = playCounter(plays)
  		var currentPlay= lastPlay(plays)
  		console.log(plays[currentPlay])
  		description = plays[currentPlay].desc
  		console.log(description)
  		ACTIONS.play2Haiku(description)
  		ACTIONS.renderAllPlays(playObject[gameEid].drives[1].plays)

  		})

console.log(RiTa.getPosTags(haiku));

 


var currentPlay = ""








