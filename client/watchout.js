// start slingin' some d3 here.
var gameSize= {
	height: 400,
	width: 800,		
	enemies: 5,
	r:20
	}

var currentScore = 0;
var highScore = 0;
var collisionCount = 0;

var player = {
	x: gameSize.width/2,
	y: gameSize.height/2
}

var scoreUpdate = function(){
	d3.select('.scoreboard .current span').text(currentScore);
	d3.select('.scoreboard .high span').text(highScore);
	d3.select('.scoreboard .collisions span').text(collisionCount);
}

var scoreCounter = function(){
	currentScore = currentScore + 1;
	if(currentScore>highScore){
		highScore=currentScore;
	}
	scoreUpdate()
}
setInterval(scoreCounter,100);

// Add string px 
var addPx = function(number){
	return number + 'px';
}
//create board using gameSize parameters
var board = d3.select('.board').style({
	width: addPx(gameSize.width),
	height: addPx(gameSize.height)
});
//randomized Y coordinates
var randomY = function(){
	return addPx (Math.floor(Math.random() * gameSize.height))
};
//randomized Y coordinates
var randomX = function(){
	return addPx (Math.floor(Math.random() * gameSize.width))
};

d3.select('.player')
 	
 	.style({
	top: addPx(player.y),
	left: addPx(player.x),
	width: addPx(gameSize.r),
	height: addPx(gameSize.r)

})//.call(drag);
 	
//creating enemies and placing them on the board
var asteroids = board.selectAll('.asteroids')
	.data(d3.range(gameSize.enemies))
	.enter().append('div')
	.attr('class', 'asteroid')
	.style('top', function(){
		
		return randomY();
	})
	.style('left', function(){
		
		return randomX();
	})
	.style({
		width: addPx(gameSize.r),
		height: addPx(gameSize.r),
	});



var transition = function(){
	asteroids.transition().style('top',function(){
		return randomY();}).style('left',function(){
			return randomX();
		}).duration(1000)

};
setInterval(transition,1000);


board.on('mousemove', function(){
	var loc = d3.mouse(this);
	player = {x : loc[0], y: loc[1]};
	d3.select('.player').style({
		top: addPx( player.y),
		left: addPx(player.x)
	})

})



// d3.selectAll('.player').on('mousedown', function(){
// 	var player = d3.select(this)
// 	 .classed('active,' true);

// 	 var track = d3.select(window)
// 	  .on('mousemove', mousemove)
// 	  .on('mouseup', mouseup);

// 	  function mouseup(){
// 	  	player.classed('active', false);
// 	  	track.on('mousemove'. null).on('mouseup', null);

// 	  }
// })
//var move = function(){
//     
//var dragTarget = d3.select(this);
//     
//   dragTarget
//       .attr("cx", function(){return d3.event.dx + parseInt(dragTarget.style('top'),10)})
//       .attr("cy", function(){return d3.event.dy + parseInt(dragTarget.style('left'),10)});
//};
//var drag=d3.behavior.drag().on("drag", move);

//d3.select('.player').call(drag)



var collisions = function(){
	var collision = false;

	asteroids.each(function(){
		var cx = this.offsetLeft + gameSize.r;
		var cy = this.offsetTop + gameSize.r;

		var x = cx - player.x;
		var y = cy - player.y;

		if(Math.sqrt(x*x + y*y) < gameSize.r){
			collision = true;
		}
	})
	if(collision){
		currentScore = 0;
		collisionCount = collisionCount +1;
	}
}

d3.timer(collisions)

	
