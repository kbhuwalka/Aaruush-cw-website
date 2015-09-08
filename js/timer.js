$(document).ready(function(){
	var duration = 60; //in seconds
	startTimer(duration);
});

function startTimer(duration){
	var remainingTime = duration;
	$("#time").html("Remaing: "+ remainingTime +" seconds");
	if(remainingTime == 0){
		$("#submit-answer").click();
		return;
	}
	remainingTime--;
	setTimeout(function(){
		startTimer(remainingTime);
	},1000);
}