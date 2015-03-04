

cells = [document.getElementById("square00"), document.getElementById("square10"), document.getElementById("square20"), document.getElementById("square01"), document.getElementById("square11"), document.getElementById("square21"), document.getElementById("square02"), document.getElementById("square12"), document.getElementById("square22")]; //array of the nine tic tac toe cells

turn = 0; // keeping track of how many turns there have been

winning_player = "None"; // records the currnet winner as either X O or None

handler = function()// function that handles gameplay
{
	if (this.innerHTML != "X" && this.innerHTML != "O")//checks if cell is already filled
	{
		if (turn % 2 == 0)//if x's turn
		{
			this.innerHTML = "X";//marks the cell with an X

		}
		else
		{
			this.innerHTML = "O"; //otherwise markes the cell with an O because it must be o's turn
		}

		turn++;//advances the number of turns 
		winner = win();//checks to see if someone has won

		if (turn == 9 && winner == "None")//checks for a Draw
		{
			alert("It's a Draw");
			document.location.reload()//reports a draw and reloads the game

		}
		else if (winner != "None")//if someone has won the game
		{
			alert(winning_player+" Wins!")
			document.location.reload()//reports that the winning player has won and reloads the game
		}
	} 
};
win = function()//function to check for a winner
{
	if (cells[0].innerHTML == cells[1].innerHTML && cells[2].innerHTML ==cells[0].innerHTML && cells[0].innerHTML == "X")//checks if x has won in row 1
	{
		cells[0].className = "winner";//marks winning cells
		cells[1].className = "winner";
		cells[2].className = "winner";
		winning_player = "X";//sets x as winning player
	}
	if (cells[0].innerHTML == cells[1].innerHTML && cells[2].innerHTML ==cells[0].innerHTML && cells[0].innerHTML == "O")//checks if o has won in row 1
	{
		cells[0].className = "winner";
		cells[1].className = "winner";
		cells[2].className = "winner";
		winning_player = "O";//sets o as winning player
	}
	if (cells[3].innerHTML == cells[4].innerHTML && cells[5].innerHTML ==cells[3].innerHTML && cells[3].innerHTML == "X")//checks if x has won in row 2
	{
		cells[3].className = "winner";
		cells[4].className = "winner";
		cells[5].className = "winner";
		winning_player = "X";
	}
	if (cells[3].innerHTML == cells[4].innerHTML && cells[5].innerHTML ==cells[3].innerHTML && cells[3].innerHTML == "O")//checks if o has won in row 2
	{
		cells[3].className = "winner";
		cells[4].className = "winner";
		cells[5].className = "winner";
		winning_player = "O";
	}
		if (cells[6].innerHTML == cells[7].innerHTML && cells[8].innerHTML ==cells[6].innerHTML && cells[6].innerHTML == "X")//checks if x has won in row 3
	{
		cells[6].className = "winner";
		cells[7].className = "winner";
		cells[8].className = "winner";
		winning_player = "X";
	}
	if (cells[6].innerHTML == cells[7].innerHTML && cells[8].innerHTML ==cells[6].innerHTML && cells[6].innerHTML == "O")//checks if o has won in row 3
	{
		cells[6].className = "winner";
		cells[7].className = "winner";
		cells[8].className = "winner";
		winning_player = "O";
	}
	if (cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML ==cells[8].innerHTML && cells[0].innerHTML == "X")//checks if x has won diagonaly top left to bottom right
	{
		cells[0].className = "winner";
		cells[4].className = "winner";
		cells[8].className = "winner";
		winning_player = "X";
	}
	if (cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML ==cells[8].innerHTML && cells[0].innerHTML == "O")//checks if o has won diagonaly top left to bottom right
	{
		cells[0].className = "winner";
		cells[4].className = "winner";
		cells[8].className = "winner";
		winning_player = "O";
	}
	if (cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML ==cells[6].innerHTML && cells[2].innerHTML == "X")//checks if x has won diagonaly top right to bottom left
	{
		cells[2].className = "winner";
		cells[4].className = "winner";
		cells[6].className = "winner";
		winning_player = "X";
	}
	if (cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML ==cells[6].innerHTML && cells[2].innerHTML == "O")//checks if o has won diagonaly top right to bottom left
	{
		cells[2].className = "winner";
		cells[4].className = "winner";
		cells[6].className = "winner";
		winning_player = "O";
	}
	if (cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML ==cells[6].innerHTML && cells[0].innerHTML == "X")//checks if x has won in column 1
	{
		cells[0].className = "winner";
		cells[3].className = "winner";
		cells[6].className = "winner";
		winning_player = "X";
	}
	if (cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML ==cells[6].innerHTML && cells[0].innerHTML == "O")//checks if o has won in column 1
	{
		cells[0].className = "winner";
		cells[3].className = "winner";
		cells[6].className = "winner";
		winning_player = "O";
	}
	if (cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML ==cells[7].innerHTML && cells[1].innerHTML == "X")//checks if x has won in column 2
	{
		cells[1].className = "winner";
		cells[4].className = "winner";
		cells[7].className = "winner";
		winning_player = "X";
	}
	if (cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML ==cells[7].innerHTML && cells[1].innerHTML == "O")//checks if o has won in column 2
	{
		cells[1].className = "winner";
		cells[4].className = "winner";
		cells[7].className = "winner";
		winning_player = "O";
	}
	if (cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML ==cells[8].innerHTML && cells[2].innerHTML == "X")//checks if x has won in column 3
	{
		cells[2].className = "winner";
		cells[5].className = "winner";
		cells[8].className = "winner";
		winning_player = "X";
	}
	if (cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML ==cells[8].innerHTML && cells[2].innerHTML == "O")//checks if o has won in column 3
	{
		cells[2].className = "winner";
		cells[5].className = "winner";
		cells[8].className = "winner";
		winning_player = "O";
	}
	return winning_player;//returns winning player as either X O or None
}

for (var i = 0; i < cells.length; i++) 
{
	cells[i].onclick = handler;//loops through all cells and calls gameplay handler function if the cell is clicked
}


