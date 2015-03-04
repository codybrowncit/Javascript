 document.addEventListener("DOMContentLoaded", function() 
 {
	var bricks = []
	var a = 0;
	var b = 0;
	var bx = 385;
	var by =300;
	var count =1;
	var main = document.getElementById('main')
	var paddle = document.createElement('div')
	var offset = main.offsetLeft;

	
	// ball velocity
	var msPerFrame = 20;
	var secondsPerFrame = msPerFrame / 1000;

	// This sets horizontal rate to 200--600 pixels/second
	var vx = secondsPerFrame * (Math.floor(Math.random() * 400) + 200);
	if (Math.random() < 0.5) 
	{
		vx = -vx;
	};

	// This sets verical rate to 500 pixels/second
	var vy = secondsPerFrame * 500;

	collide = function(bx, y)
	{
		var brickx = 80;  // dimensions of a brick
		var bricky = 20;
		var row = Math.floor((y - 100) / bricky);
		var col = Math.floor(bx / brickx);
		if (row < 0 || row >= 10 || col < 0 || col >= 10)
    		{// not in the right area
    			return -1;
    		};
		if ((bx+2) % brickx < 4 || (y+2) % bricky < 4)
    	{// not quite in the brick--it's in the white border around a brick
    			return -1;
    	};
		// otherwise, row and column give the brick number
		return [row, col];
	};

	mm = function(e)
	{
		x=e.clientX-280;
		if (x < 0)
		{
			x=0;
		};
		if (x > 800-140)
		{
			x=800-140;
		};
		//console.log(e.clientX-800,e.clientY-600);
		paddle.style.left= (x);
	};

	for (var i=0; i<100; i++)
	{
		bricks.push(document.createElement('div'));
		bricks[i].classList.add('brick');
	};
	for (var i = 0; i<bricks.length; i++)
	{
		bricks[i].classList.add('row'+a);
		if(count%10==0)
		{
			a++;
		};
		count++;
	};
	count =1;
	for (var i = 0; i<bricks.length; i++)
	{
		bricks[i].classList.add('col'+b);
		b++;
		if(b>9)
		{
			b=0;
		};
	};
	for (var i=0; i<100; i++)
	{
		main.appendChild(bricks[i]);
	};

	breakBrick = function(row, col)
	{
		for (var i = 0; i < bricks.length; i++) {
			if(bricks[i].classList.contains('row'+row))
			{
				if(bricks[i].classList.contains('col'+col)){	
					if(!bricks[i].classList.contains('broken'))
					{
						bricks[i].classList.add('broken');
						vx = -vx;
						vy = -vy;
						return;
					};
				};
			};
		};
	};
	paddleCollide = function(bx, by)
	{
		pad = document.getElementById('paddle'),
    	style = window.getComputedStyle(pad),
    	left = style.getPropertyValue('left');
    	padleft = left.split("px");
    	if(bx>padleft[0]+140)
    	{
    		return;
    	};
    	if (bx+30<padleft[0])
    	{
    		return;
    	};
    	if (by+30<550)
    	{
    		return;
    	};
    	if(by>570)
    	{
    		return;
    	};
    	vy = -Math.abs(vy);
    	vx = -vx;
    	return;	
	};
	winCount = function()
	{
		var counter = 0;
		for (var i = 0; i < bricks.length; i++) 
		{
 			if(bricks[i].classList.contains('broken'))
 			{
 				counter++;
 			};
 		};
 		return counter;
	};

	moveBall = function()
	{
		bx+=vx;
		by+=vy;
		ball.style.left = bx;
		ball.style.top = by;
		if (bx+30 < 30)
		{
			bx = 30;
			vx = -vx;
		}
		if (by+30 < 30)
		{
			by = 30;
			vy = -vy;
			
		}
		if (bx > 800-30)
		{
			bx =800-30;
			vx = -vx;
		}
		if (by > 600-30)
		{
			alert("Game Over!");
			document.location.reload();
		}
		tl = collide(bx, by);
		bl = collide(bx, by+30);
		br = collide(bx+30, by+30);
		tr = collide(bx+30, by);
		if(tl != -1)
		{
			breakBrick(tl[0], tl[1]);
		};
		if(tr != -1)
		{
			breakBrick(tr[0], tr[1]);
		};
		if(bl != -1)
		{
			breakBrick(bl[0], bl[1]);
		};
		if(br != -1)
		{
			breakBrick(br[0], br[1]);
		};
		paddleCollide(bx, by);
		win_count = winCount();
		if (win_count == 100)
		{
			alert("You Win!");
			document.location.reload();
		}
	};

	createBall = function()
	{
		var ball = document.createElement('div');
		ball.id = 'ball';
		main.appendChild(ball);
		ball.style.left = bx;
		ball.style.top = by;
		var intervalID = window.setInterval(moveBall, 20);
		main.removeEventListener('click', createBall);
	};
	
	paddle.id = 'paddle'
	main.appendChild(paddle)
	paddle.style
	paddle.style.left = (800-140)/2		
	document.body.onmousemove = mm;

	main.addEventListener('click', createBall);

 });