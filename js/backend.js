$(document).ready(function() {
	getQuestions();
});

//Gets the questions from the PHP program
function getQuestions(){
	var url = "php/questions.php";
	var posting = $.post(url, {

	});

	posting.done(function(data){

	});

	posting.fail(function(){
		
	});
}