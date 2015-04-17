

angular.module('calendarApp', []).controller('MainCtrl', [function(){

	myEvents = {};

	var current_date = new Date ();
	this.year = current_date.getFullYear();
	this.month = current_date.getMonth();
	this.day = current_date.getDate();
	this.current_year = this.year;
	this.current_month = this.month;
	this.events = function()
	{
		this.display();
	}
	this.next = function()
	{
		this.current_month += 1;
		if (this.current_month > 11)
		{
			this.current_month = 0;
			this.current_year+=1;
		}
		this.display();
	};
	this.next_year = function()
	{
		this.current_year += 1;
		this.display();
	};

	this.prev = function()
	{
		this.current_month -= 1;
		if (this.current_month < 0)
		{
			this.current_month = 11;
			this.current_year-=1;
		}
		this.display();
	};

	this.prev_year = function()
	{
		this.current_year -= 1;
		this.display();
	};

	this.today = function()
	{
		this.current_month = this.month;
		this.current_year = this.year;
		this.display();
	};
	this.months = [
		{name: "January"},{name: "February"},{name: "March"},{name: "April"},{name: "May"},{name: "June"},{name: "July"},{name: "August"},{name: "September"},{name: "October"},{name: "November"},{name: "December"}
	];
	this.display = function()
	{
		this.weeks = [];

		last = new Date(this.current_year, this.current_month + 1, 1);
		first = new Date(this.current_year, this.current_month, 1);
		while(first.getDay() !== 0)
		{
			first.setDate(first.getDate() - 1);
		}
		while(last.getDay() !== 0)
		{
			last.setDate(last.getDate() + 1);
		}
		var temp = first;
		this.days = [];
		while(temp.valueOf() !== last.valueOf())
		{
			tempdate=new Date(temp);
			lastday = new Date(this.current_year, this.current_month+1, 0);
			firstday = new Date(this.current_year, this.current_month, 1);
			if (tempdate < firstday || tempdate > lastday)
			{
				this.days.push(" ");
			}
			else
			{
				this.days.push(new Date(temp));	
			}
		
			temp.setDate(temp.getDate() + 1);
		};

		for(var i = 0; i < this.days.length; i++)
		{
			if (i % 7 === 0) this.weeks.push([]);
			this.weeks[this.weeks.length-1].push(this.days[i]);
		};
	


		this.day_names = [
			{name: "Sunday"},{name: "Monday"},{name: "Tuesday"},{name: "Wednesday"},{name: "Thursday"},{name: "Friday"},{name: "Saturday"}
		];
	};
	this.display();

}]);