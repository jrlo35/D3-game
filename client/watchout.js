// start slingin' some d3 here.


var gameSize= {
	height: 800,
	width: 700,		
	enemies: 30
	}

var addPx = function(number){
	return number + 'px';
}

var board = d3.select('.board').style({
	width: addPx(gameSize.width),
	height: addPx(gameSize.height)
});



// var board= d3.select('board').append('svg:svg')
// 	//.style({
// 	//	width: pixel(gameSize.h),
// 	//	height: pixel(gameSize.w)
// 	//})
// 	.attr('width', gameSize.width)
// 	.attr('height', gameSize.height)

// var gameAxes= {x: d3.scale.linear().domain([0,100]).range[0,gameSize.width],
// y: d3.scale.linear().domain([0,100]).range[0,gameSize.height]}
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


var transition = function(){
	asteroids.transition().style('top',function(){
		return randomY();}).style('left',function(){
			return randomX();
		}).duration(1000)

};
var intervalID=window.setInterval(transition,1000);

// setInterval(transition,1000);
// var enemyData=_.range(0,gameSize.enemies).map(function(i){
// 	return {
// 		id:i,
// 		x:Math.random()*100,
// 		y.Math.random()*100
// 	}
// })

	
