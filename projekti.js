

// Pjesa e 


$(document).ready(function(){

    $(".sidebar").css('background-color', '#df2d45');

    $(".mt-3").css('color', 'white');
    $(".mt-3").css('font-family', 'Poppins, Sans-serif');

    $(".col-lg-4").css('justify-content', 'center');

    $("#full").css('font-weight', 'bold');

    $(".sidebar-title").css('text-align', 'center');

    $(".mt-3, li").css('justify-content', 'center');

    $(".title").css('color', '#1E2432');
    $(".title").css('font-family', 'Poppins, Sans-serif');
    $(".title").css('font-size', '35px');
    $(".title").css('font-weight', '60');

    $(".content").mouseenter(function()
    {
        
        $(".content").css('color', '#df2d45');
    })
    
    $(".content").mouseleave(function()
    {
        
        $(".content").css('color', '#4f4f4f');
    })









    $(".img").hover(function(){

      $(this).animate({width: "280px", height: "280px", left: "10px"}, "slow");

    },
     function(){

      $(this).animate({width: "250px", height: "250px", left: "10px"}, "slow");
    });
});