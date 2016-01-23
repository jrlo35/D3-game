// start slingin' some d3 here.


var gameSize= {
	height: 800,
	width: 700,		
	enemies: 30
	}

var currentScore = 0;
var highScore = 0;
var collisionCount = 0;

var scoreUpdate = function(){
	d3.select('.scoreboard .current span').text(currentScore);
	d3.select('.scoreboard .high span').text(highScore);
	d3.select('.scoraboard .collisions span').text(collisionCount);
}

var scoreCounter = function(){
	currentScore = currentScore + 1;
	if(currentScore>highScore){
		highScore=currentScore;
	}
	scoreUpdate()
}
setInterval(scoreCounter,500);


var addPx = function(number){
	return number + 'px';
}

var board = d3.select('.board').style({
	width: addPx(gameSize.width),
	height: addPx(gameSize.height)
});

var randomY = function(){
	return addPx (Math.floor(Math.random() * gameSize.height))
};

var randomX = function(){
	return addPx (Math.floor(Math.random() * gameSize.width))
};

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
		height: '30px',
		width: '30px'
	});

//var distance=asteroids.
//var xDiff=asteroids
//var yDiff=
//
var transition = function(){
	asteroids.transition().style('top',function(){
		return randomY();}).style('left',function(){
			return randomX();
		}).duration(1000)

};
var intervalID=window.setInterval(transition,1000);

var player = d3.select('.board')
	.append('svg').attr('class','player')
	.attr('width',50).attr('height',50)
	.append('circle').attr('cx',25).attr('cy',25).attr('r',10)
	.style('fill','purple')
	

//var distance

//var collision = asteroids.each(function(d){
//	var x=d3.select(this).style('top');
//	var y=d3.select(this).style('left');
//
//	var x1 = x - player.x1;
//	var y1 = y - player.y1;
//})

// setInterval(transition,1000);
// var enemyData=_.range(0,gameSize.enemies).map(function(i){
// 	return {
// 		id:i,
// 		x:Math.random()*100,
// 		y.Math.random()*100
// 	}
// })




	
