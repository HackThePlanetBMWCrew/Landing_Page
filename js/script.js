window.onload = function(){        
	Parse.initialize("FqyxgwP4S3Wwaq31oFSTcgOJAQbuijeuaoE1nWGK", "Vuxd181gzNZQqHAdxk7ip929qye8kqZYiOqTnapv");
	var name, bike = "";
	var mile, time, ride, taken, force = 0;
	var temp = 0;
	function rankMile(){
		var i = 0;
		var parseInfo = new Parse.Query('leaderboard');
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
			  	name = results[i].get('name');
			  	bike = results[i].get('bike');
			  	mile = results[i].get('mile');
			  	if(mile > temp){
			  		temp = mile;
			  	}
			  	makeTable(i+1,name, bike, temp);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};
	function rankTime(){
		var i = 0;
		var parseInfo = new Parse.Query('leaderboard');
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
			  	name = results[i].get('name');
			  	bike = results[i].get('bike');
			  	time = results[i].get('time');
			  	if(time > temp){
			  		temp = time;
			  	}
			  	makeTable2(i+1,name, bike, time);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};
	function rankRide(){
		var i = 0;
		var parseInfo = new Parse.Query('leaderboard');
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
			  	name = results[i].get('name');
			  	bike = results[i].get('bike');
			  	ride = results[i].get('ride');
			  	if(ride > temp){
			  		temp = ride;
			  	}
			  	makeTable3(i+1,name, bike, ride);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};
	function rankTaken(){
		var i = 0;
		var parseInfo = new Parse.Query('leaderboard');
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
			  	name = results[i].get('name');
			  	bike = results[i].get('bike');
			  	taken = results[i].get('taken');
			  	if(taken > temp){
			  		temp = taken;
			  	}
			  	makeTable4(i+1, name, bike, taken);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};
	function rankForce(){
		var i = 0;
		var parseInfo = new Parse.Query('leaderboard');
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
			  	name = results[i].get('name');
			  	bike = results[i].get('bike');
			  	force = results[i].get('force');
			  	if(force > temp){
			  		temp = force;
			  	}
			  	makeTable5(i+1, name, bike, force);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};

	function makeTable(i,name,bike,metric){
		$("#Metric").text(metric);
		$("#table").append("<tr class='leaderboard'><td class='col0aa'>"+i+"</td><td class='col0aa'>"+name+"</td><td class='col0aa'>"+bike+"</td><td class='col0aa'>"+metric+"</td></tr>");
	}
	function makeTable2(i,name,bike,metric){
		$("#Metric").text(metric);
		$("#table").append("<tr class='leaderboard'<td class='col1ab'>"+i+"</td>><td class='col1ab'>"+name+"</td><td class='col1ab'>"+bike+"</td><td class='col1ab'>"+metric+"</td></tr>");
	}
	function makeTable3(i,name,bike,metric){
		$("#Metric").text(metric);
		$("#table").append("<tr class='leaderboard'><td class='col2ac'>"+i+"</td><td class='col2ac'>"+name+"</td><td class='col2ac'>"+bike+"</td><td class='col2ac'>"+metric+"</td></tr>");
	}
	function makeTable4(i,name,bike,metric){
		$("#Metric").text(metric);
		$("#table").append("<tr class='leaderboard'><td class='col3ad'>"+i+"</td><td class='col3ad'>"+name+"</td><td class='col3ad'>"+bike+"</td><td class='col3ad'>"+metric+"</td></tr>");
	}
	function makeTable5(i,name,bike,metric){
		$("#Metric").text(metric);
		$("#table").append("<tr class='leaderboard'><td class='col4ae'>"+i+"</td><td class='col4ae'>"+name+"</td><td class='col4ae'>"+bike+"</td><td class='col4ae'>"+metric+"</td></tr>");
	}
	$("#actMiles").click(function(){
		rankMile();
		$(".col1ab").css("display","none");
		$(".col2ac").css("display","none");
		$(".col3ad").css("display","none");
		$(".col4ae").css("display","none");
	});
	$("#actTime").click(function(){
		rankTime();
		$(".col0aa").css("display","none");
		$(".col2ac").css("display","none");
		$(".col3ad").css("display","none");
		$(".col4ae").css("display","none");
	});
	$("#actMost").click(function(){
		rankRide();
		$(".col0aa").css("display","none");
		$(".col1ab").css("display","none");
		$(".col3ad").css("display","none");
		$(".col4ae").css("display","none");
	});
	$("#actTurns").click(function(){
		rankTaken();
		$(".col0aa").css("display","none");
		$(".col1ab").css("display","none");
		$(".col2ac").css("display","none");
		$(".col4ae").css("display","none");
	});
	$("#actG").click(function(){
		rankForce();
		$(".col0aa").css("display","none");
		$(".col1ab").css("display","none");
		$(".col2ac").css("display","none");
		$(".col3ad").css("display","none");
	});
};