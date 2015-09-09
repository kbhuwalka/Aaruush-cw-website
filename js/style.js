$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

    currentFrame = 0;
    animateProgressBar(90);

  });

function renderProgress(progress)
{
    progress = Math.floor(progress);
    if(progress<25){
        var angle = -90 + (progress/100)*360;
        $(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=25 && progress<50){
        var angle = -90 + ((progress-25)/100)*360;
        $(".animate-0-25-b").css("transform","rotate(0deg)");
        $(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=50 && progress<75){
        var angle = -90 + ((progress-50)/100)*360;
        $(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        $(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=75 && progress<=100){
        var angle = -90 + ((progress-75)/100)*360;
        $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b")
                                              .css("transform","rotate(0deg)");
        $(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
    }
    $(".text").html(progress+"%");
}

function animateProgressBar(progress){
	setTimeout(function(){
		renderProgress(currentFrame++);
		if(--progress+1) animateProgressBar(progress);
	},25);
}