
myEvents = {};

var current_date = new Date ();
var year = current_date.getFullYear();
var month = current_date.getMonth();
var day = current_date.getDate();
var current_year = year;
var current_month = month;

var month_names = new Array ( );
		month_names[month_names.length] = "January";
		month_names[month_names.length] = "February";
		month_names[month_names.length] = "March";
		month_names[month_names.length] = "April";
		month_names[month_names.length] = "May";
		month_names[month_names.length] = "June";
		month_names[month_names.length] = "July";
		month_names[month_names.length] = "August";
		month_names[month_names.length] = "September";
		month_names[month_names.length] = "October";
		month_names[month_names.length] = "November";
		month_names[month_names.length] = "December";
		
var days_names = new Array ( );
		days_names[days_names.length] = "Sunday";
		days_names[days_names.length] = "Monday";
		days_names[days_names.length] = "Tuesday";
		days_names[days_names.length] = "Wednesday";
		days_names[days_names.length] = "Thursday";
		days_names[days_names.length] = "Friday";
		days_names[days_names.length] = "Saturday";

jQuery(function($) {
	
	$("#eventList").click( function () 
	{
		EventView(year, month, day);
		$('#week').addClass('displayNone');	
		$(this).removeClass('normal');
		$(this).addClass('active');
		$('#calendar').removeClass('active');
		$('#calendar').addClass('normal');	
	});
	
	$("#calendar").click( function ()
	{	
		CreateCalendarViewTable(current_year, current_month, day);
		$('#week').removeClass('displayNone');	
		$(this).removeClass('normal');
		$(this).addClass('active');
		$('#eventList').removeClass('active');
		$('#eventList').addClass('normal');	
	});
										  
	CreateCalendarViewTable(year, month, day);
										 
}); 

var CreateCalendarViewTable = function (y, m, d)
	{
	$("#month").html("");
	$("#mainContainer").html("");
	mystring = '<div class="cal"><table ><tr id="week"><th class="text-center">Sunday</th><th class="text-center">Monday</th><th class="text-center">Tuesday</th><th class="text-center">Wednesday</th><th class="text-center">Thurdsay</th><th class="text-center">Friday</th><th class="text-center">Saturday</th></tr></table></div><div class="cal" id="calendarView">';
	var FirstDay = new Date (y, m, 1);
	var day1 = FirstDay.getDay();
	var nextmonthdays = 1;
	var count = 0;
		
	if (m === 12)
	{
		m=0;
		y=y+1;
	}
	
	if (m === -1)
	{
		m=11;
		y=y-1;
	}
	
	
	var i = 0;
	if(m === 0 || m === 2 || m === 4 || m === 6 || m === 7 || m === 9 || m === 11){i = 31;}

	else if(m === 1)
	{
			if (y % 4 === 0) {i = 29;}
			else { i = 28;}
	}

	else{i = 30;}
	
	var days = 1;
	
	
	var lastDay = new Date (y, m, i);
	var dayi = lastDay.getDay();
	var extra = 0;
	if (dayi < 6){extra = 6-dayi}
	var isData = false;
	lenghtofLoop = i+day1+extra;
	var m2d = -1;
	var d2d = -1;
	if (String(m).length === 1)
	{
		m2d = String(0) + String(m);
	}
	else
	{
		var m2d = m;
	}
	var id ='';

	$("#month").append('<p>' + month_names[m] + ' ' + y + '</p>');

	$("#back").click( function ()
	{	
		CreateCalendarViewTable(y, (m - 1), d);
	});

	$("#forward").click( function ()
	{	
		CreateCalendarViewTable(y, (m + 1), d);

	});
	$("#todaytoday").click( function ()
	{	
		new_date = new Date();
		new_day = new_date.getDate();
		new_month = new_date.getMonth();
		new_year = new_date.getFullYear();
		CreateCalendarViewTable(new_year, new_month, new_day);

	});

	mystring += '<table >';

	for(var f=0; f < lenghtofLoop; f++)
	{
		if(day1 <= f && days <= i)
		{
			
			if (String(days).length === 1)
			{
				d2d = String(0) + String(days);
			}
			else
			{
				var d2d = days;
			}
			id = String(y) + String(m2d)  + String(d2d); 
			if (id in myEvents)
			{	
				var myElist = '';
				for (var k = 0; k < myEvents[id].length; k++)
				{
					myElist+= '<button onclick="RemoveEvent('+id+','+ k +')"><span class="glyphicon glyphicon-remove"></span></button>'+ myEvents[id][k]+'<br />';
				}
				
				if (days == day &&  m == month && y == year)
				{
				mystring += '<td id="today" class="eventadding"><div class="days">' + days + '</div><div class="added-event">'+ myElist +'</div><a id="add-more" onclick="PopEventWindow('+id+')">+</a></div></td>';	
				}else{
				mystring += '<td class="eventadding"><div class="days">' + days + '</div><div class="added-event">'+ myElist +'</div><a id="add-more" onclick="PopEventWindow('+id+')">+</a></div></td>';
			}
				days+=1;
			}
			
			else
			{
				
				if (String(days).length === 1)
				{
					d2d = String(0) + String(days);
				}
				else
				{
					var d2d = days;
				}
				id = String(y) + String(m2d)  + String(d2d); 
				if (days == day && m == month && y == year)
				{
				mystring += '<td id="today" class="eventadding" onclick="PopEventWindow('+id+')"><div class="days">' + days + '</div><div></div></td>';	
				}
				else{
				mystring += '<td class="eventadding" onclick="PopEventWindow('+id+')"><div class="days">' + days + '</div><div></div></td>';
				
				}
				days+=1;
			}
		}
		
		else if(day1 >= f)
		{
			mystring += '<td>&nbsp;</td>';
		}
		
		else
		{
			mystring += '<td ><div></div><div>&nbsp;</div></td>';
			nextmonthdays+=1;
		}
		
		
		if (f===6 || f===13 || f===20 || f===27 || f===34 || f===41){mystring += '</tr><tr>';}
		
		
	}
	mystring += '</tr></table></div>';
	$("#mainContainer").append(mystring);
	
		
	current_year = y;
	current_month = m;
	
	};



var EventView = function (y, m, d) {
	var SortedEvents = sortObject(myEvents);
	var count = 0;
	$("#mainContainer").html("");

	if ($.isEmptyObject(myEvents))
	{
		$("#mainContainer").append('<div id="Eventview"></div>');
	}
	else
	{
		mystring = '<div id="Eventview" class="col-md-10 col-md-offset-1"><table class="table table-striped">';
	
		for (key in SortedEvents)
		{

			
			var dy = key.substring(0,4);
			var dm = key.substring(4,6);
			var dd = key.substring(6);
	
		
			if (dm.substring(0, 1) === 0){dm = dm.substring(1);}
			var thisDate = new Date(dy, dm, dd)
			
		
			var m2d = -1;
			var d2d = -1;
			if (String(m).length === 1)
			{
				m2d = String(0) + String(m);
			}
			else
			{
				var m2d = m;
			}
			
			if (String(d).length === 1)
			{
				d2d = String(0) + String(d);
			}
			else
			{
				var d2d = d;
			}
			
			var id ='';
			id = String(y) + String(m2d)  + String(d2d); 
			var nextid = String(y+1) + String(m2d)  + String(d2d); 

			
			if (key >= id && key <= nextid)
			{
				var theDate = '';
				theDate = days_names[thisDate.getDay()]+ ', '+ month_names[thisDate.getMonth()] + ' ' + dd + ', '+ dy;
		
		
				mystring+='<tr><th>'+ theDate +'</th></tr>';
		
				for (hs in SortedEvents[key])
				{
		 			mystring+='<tr><td>'+SortedEvents[key][hs]+'<button onclick="RemoveEvent('+key+','+ hs +')"><span class="glyphicon glyphicon-remove"></span></button>';
				}
			}
			count++;
		 
		}
	
				mystring += '</table></div>';
	
		$("#mainContainer").append(mystring);
		
	}
};

var PopEventWindow = function (Did) 
{
	var container = $('<div id="eventwindow"></div>');
	var close = $('<dutton class="btn-default close"><span class="glyphicon glyphicon-remove"></span></button>');
	var body = $('<br /><form class="form-inline"><div class="form-group"><label class="control-label col-md-4">Event Title</label><input class="form-control col-md-8" type="text" id="eName" name="eName" /></div><div class="form-group"><label class="control-label col-md-3">Event Time</label><input class="form-control col-md-9" type="time" id="eTime" name="eTime" /></div><div class="form-group"><label class="control-label col-md-4">Event Location</label><input class="form-control col-md-8" type="text" id="eLoc" name="eLoc" /></div></form><button id="calendar" class="btn btn-default" onclick="AddEvent('+Did+','+ 0 +')">Create Event</button>');

	close.bind('click', function(e)
	{
		$(e.target).parent().parent().remove();
	});

	$('#mainContainer').append(container.append(close).append(body));
	$('#eTime').focus();

	$('#eName').keydown(function (e){
	    if(e.keyCode == 13){
	       AddEvent(Did + 0)
	    }
	});
		
};


var AddEvent = function (D_id, i) {

	
	if(D_id in myEvents)
	{
		myEvents[D_id].push($('#eTime').val() + " " + $('#eName').val()+" at " + $('#eLoc').val());
	}
	else
	{
		myEvents[D_id] = [$('#eTime').val() + ' ' + $('#eName').val()+" at " + $('#eLoc').val()];
	}
	
	
	CreateCalendarViewTable(current_year, current_month, day);
	$('div#eventwindow').remove();
		
};

var EditEvent = function (D_id, i) {
	myEvents[D_id][i] = $('#eEvent').val();
	CreateCalendarViewTable(current_year, current_month, day);
	$('div#eventwindow').remove();
		
};

var EditEventDate = function (D_id, i) {
	myEvents[D_id][i] = $('#eEvent').val();
	EventView(year, month, day);
	$('div#eventwindow').remove();
		
};


var RemoveEvent = function (D_id, i) {
	myEvents[D_id].splice(i, 1);
	CreateCalendarViewTable(current_year, current_month, day);
	if (myEvents[D_id].length === 0) { delete myEvents[D_id]; }

		
};



function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
                a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
};