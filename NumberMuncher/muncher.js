var problem = "";
var firstNum = 0;
var secondNum = 0;
var correct = false;
var answerCount = 0;
var score = 0;
var symbol = Math.floor(Math.random() * 4);
var answer = 0;
var all = true;


$(function()
{
	$("#add").click( function() {
		all = false;
		symbol = 0;
		score = 0;
		answerCount = 0;
		$("#correct").html("");
		$("#menu").dialog('close');
		equation();
		drawBoard();

	});
	$("#minus").click( function() {
		all = false;
		symbol = 1;
		score = 0;
		answerCount = 0;
		$("#correct").html("");
		$("#menu").dialog('close');
		equation();
		drawBoard();
	});
	$("#divide").click( function() {
		all = false;
		symbol = 2;
		score = 0;
		answerCount = 0;
		$("#correct").html("");
		$("#menu").dialog('close');
		equation();
		drawBoard();
	});
	$("#times").click( function() {
		all = false;
		symbol = 3;
		score = 0;
		answerCount = 0;
		$("#correct").html("");
		$("#menu").dialog('close');
		equation();
		drawBoard();
	});
	$("#all").click( function() {
		all = true;
		score = 0;
		answerCount = 0;
		$("#correct").html("");
		$("#menu").dialog('close');
		equation();
		drawBoard();
	});
	$('.new').click(function(){
		$('#menu').dialog("open");
		$('#gameOver').dialog('close');
	});

	equation();
	drawBoard();
	document.onkeydown = checkKey;
	$("#instructions").dialog({dialogClass:'inst'});
	$("#menu").dialog();
	$('#gameOver').dialog({
        autoOpen: false
    });
	

});


var equation = function()
{
	if (all)
	{
		symbol = Math.floor(Math.random() * 4);	
	}
	firstNum = Math.floor(Math.random() * 10);
	secondNum = Math.floor(Math.random() * 10);

	if (symbol == 0)
	{
		answer = firstNum+secondNum;
		problem = String(firstNum)+"+"+String(secondNum);
	}
	else if (symbol == 1)
	{
		if (firstNum<secondNum)
		{
			answer = secondNum-firstNum;
			problem = String(secondNum)+"-"+String(firstNum);			
		}
		else
		{
			answer = firstNum-secondNum;
			problem = String(firstNum)+"-"+String(secondNum);
		}	
		
	}
	else if (symbol == 3)
	{
		answer = firstNum*secondNum;	
		problem = String(firstNum)+"x"+String(secondNum);
	}
	else
	{
		while (firstNum<secondNum || firstNum%secondNum != 0)
		{
			secondNum = Math.floor(Math.random() * 10);
			firstNum = Math.floor(Math.random() * 10);				
		}
		answer = firstNum/secondNum;
		problem = String(firstNum)+"&divide;"+String(secondNum);
	}
	solutions = [];
	tablerows = [];
	for (var i = 0; i < 25; i++) {
		var rightOwrong = Math.floor(Math.random() * 5);
		if (rightOwrong == 1)
		{
			solutions.push({value: answer, muncher:false, baddy:false});
			answerCount+=1;

		}
		else
		{
			if (symbol < 3) 
			{
				var solution = Math.floor(Math.random() * 21);
			}
			else
			{
				if (answer < 20)
				{
					var solution = Math.floor(Math.random() * 21);	
				}
				else if (answer < 40)
				{
					var solution = Math.floor(Math.random() * 41);
				}
				else if (answer < 60)
				{
					var solution = Math.floor(Math.random() * 61);
				}
				else if (answer < 80)
				{
					var solution = Math.floor(Math.random() * 81);
				}
				else
				{
					var solution = Math.floor(Math.random() * 101);
				}
			};

			if (solution == answer)
			{
				solution+=1;
			}
			solutions.push({value: solution, muncher:false, baddy:false});
		}	
	};
	for(var i = 0; i < solutions.length; i++)
	{
		if (i % 5 === 0) tablerows.push([]);
		tablerows[tablerows.length-1].push(solutions[i]);
	};
	solutions[0].muncher = true;
	solutions[24].baddy = true;
};
var drawBoard = function()
{
	$("#score").html("Score: "+score);
	
	$("#table").html("<table class='col-md-7'><tr><th colspan='5'>What is "+problem+"?</th></tr>");
	var tableSting = "";	
	for (var i = 0; i < tablerows.length; i++) 
	{
		var rowString = "<tr>";
		for (var j = 0; j < 5; j++) {
			var row = tablerows[i][j].value;
			if (tablerows[i][j].baddy)
			{
				rowString += "<td><img class='baddy' src='baddy.png'><span>"+row+"</span></td>";
			}
			else if ( tablerows[i][j].muncher)
			{
				rowString += "<td><img class='muncher' src='muncher.png'><span>"+row+"</span></td>";
			}

			else
			{
				rowString += "<td>"+row+"</td>";
			}		
		};
		rowString+="</tr>";
		tableSting += rowString;
	};
	tableSting+= "</table>"
	$("table").append(tableSting);
};

var checkKey = function(e) {

	e.preventDefault();
    e = e || window.event;
    
    if (e.keyCode == '38') {
    	//up arrow
       for (var i = 0; i < tablerows.length; i++) 
       {
       		for (var j = 0; j < 5; j++) {
       			if(tablerows[i][j].muncher && i>0)
       			{
       				var muncherLoc = [i,j];
       				tablerows[i][j].muncher = false;
       			}
       		};
       };
       tablerows[muncherLoc[0]-1][muncherLoc[1]].muncher = true;
       baddyMove();
       drawBoard();
       gameOver();
    }
    else if (e.keyCode == '40') 
    {
    	//down arrow
        for (var i = 0; i < tablerows.length; i++) 
       {
       		for (var j = 0; j < 5; j++) {
       			if(tablerows[i][j].muncher && i+1<5)
       			{
       				var muncherLoc = [i,j];
       				tablerows[i][j].muncher = false;
       			}
       		};
       };
       tablerows[muncherLoc[0]+1][muncherLoc[1]].muncher = true;
       baddyMove();
       drawBoard();
       gameOver();
    }
    else if (e.keyCode == '37') 
    {
       // left arrow
       for (var i = 0; i < tablerows.length; i++) 
       {
       		for (var j = 0; j < 5; j++) {
       			if(tablerows[i][j].muncher && j>0)
       			{
       				var muncherLoc = [i,j];
       				tablerows[i][j].muncher = false;
       			}
       		};
       };
       tablerows[muncherLoc[0]][muncherLoc[1]-1].muncher = true;
       baddyMove();
       drawBoard();
       gameOver();
    }
    else if (e.keyCode == '39') 
    {
       // right arrow
       for (var i = 0; i < tablerows.length; i++) 
       {
       		for (var j = 0; j < 5; j++) {
       			if(tablerows[i][j].muncher && j+1<5)
       			{
       				var muncherLoc = [i,j];
       				tablerows[i][j].muncher = false;
       			}
       		};
       };
       tablerows[muncherLoc[0]][muncherLoc[1]+1].muncher = true;
       baddyMove();
       drawBoard();
       gameOver();
    }
    else if (e.keyCode == '32') 
    {
    	//space bar
    	$("#correct").html("");
    	for (var i = 0; i < tablerows.length; i++) 
       {
       		for (var j = 0; j < 5; j++) {
       			if(tablerows[i][j].muncher)
       			{	
       				if (tablerows[i][j].value == answer)
       				{
       					score += 1;
       					$("#correct").html("Correct!");
       					answerCount-=1;					
       				}
       				else
       				{
       					score -= 1;
       					$("#correct").html("Wrong.");
       					if (score < 0)
       					{
       						score = 0;
       					}
       					
       				}
       				tablerows[i][j].value = "&nbsp";
       			}
       		};
       };
    	if (answerCount == 0)
		{
			equation();
		}
		drawBoard();
		
       

    };
};

var baddyMove = function()
{
	var moves = [];
	for (var i = 0; i < tablerows.length; i++) 
   {
   		for (var j = 0; j < 5; j++) {
   			if(tablerows[i][j].baddy)
   			{
   				var baddyLoc = [i,j];
   				tablerows[i][j].baddy = false;		
   			}
   		};  		
   };
      if (baddyLoc[0]> 0)
   	{
   		moves.push("u");
   	};
   	if (baddyLoc[0] < 4)
   	{
   		moves.push("d");
   	};
	if (baddyLoc[1] < 4)
	{
		moves.push("r");
	};
	if (baddyLoc[1] > 0)
	{
		moves.push("l");
	};
	
	randomMove = Math.floor(Math.random() * moves.length);
	
	if (moves[randomMove] == "u") 
	{
		tablerows[baddyLoc[0]-1][baddyLoc[1]].baddy = true;	
	};
	if (moves[randomMove] == "d") 
	{
		tablerows[baddyLoc[0]+1][baddyLoc[1]].baddy = true;	
	};
	if (moves[randomMove] == "l") 
	{
		tablerows[baddyLoc[0]][baddyLoc[1]-1].baddy = true;	
	};
	if (moves[randomMove] == "r") 
	{
		tablerows[baddyLoc[0]][baddyLoc[1]+1].baddy = true;	
	};
};

var gameOver = function()
{
	console.log("gameOver");
	for (var i = 0; i < tablerows.length; i++) 
   	{
   		for (var j = 0; j < 5; j++) {
   			if(tablerows[i][j].baddy && tablerows[i][j].muncher)
   			{
   				tablerows[i][j].muncher = false;
   				$('#gameOver').html("Opps! Your Muncher was eaten by the Troggle!<br /> Final Score: "+score+"<br />");
   				$('#gameOver').dialog("open");	
   			}
   		};  		
   	};

};

