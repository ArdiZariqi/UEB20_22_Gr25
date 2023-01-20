

// Pjesa e 


$(document).ready(function(){

    //selektoret---------------------------------------------------
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

    //eventet----------------------------------------------------------
    $("#one").mouseenter(function()
    {
      $("#one").css('width', '120px')
    })
    $("#one").mouseleave(function()
    {
      $("#one").css('width', '100px')
    })
    $("#two").mouseenter(function()
    {
      $("#two").css('width', '120px')
    })
    $("#two").mouseleave(function()
    {
      $("#two").css('width', '100px')
    })
    $("#three").mouseenter(function()
    {
      $("#three").css('width', '120px')
    })
    $("#three").mouseleave(function()
    {
      $("#three").css('width', '100px')
    })
    $("#four").mouseenter(function()
    {
      $("#four").css('width', '120px')
    })
    $("#four").mouseleave(function()
    {
      $("#four").css('width', '100px')
    })
    $("#five").mouseenter(function()
    {
      $("#five").css('width', '120px')
    })
    $("#five").mouseleave(function()
    {
      $("#five").css('width', '100px')
    })

    $(".content").mouseenter(function()
    {
        
        $(".content").css('color', '#df2d45');
    })
    
    $(".content").mouseleave(function()
    {
        
        $(".content").css('color', '#4f4f4f');
    })

    
    //efektet-----------------------------------------
    //hide
    $("#btn1" ).click(function()
    {
       $("#body1").hide();
    })
    //show
    $("#btn2" ).click(function()
    {
       $("#body1").show(200);
    })

    //fade

    $(".butoni1").click(function()
    {
      $("#njeshi").fadeIn(1500);
    })
    $("#largo1").click(function()
    {
      $("#njeshi").fadeOut(1500);
    })
    $(".butoni1").click(function()
    {
      $("#secondd").fadeIn(1500);
    })
    $("#largo2").click(function()
    {
      $("#secondd").fadeOut(1500);
    })
    $(".butoni1").click(function()
    {
      $("#third").fadeIn(1500);
    })
    $("#largo3").click(function()
    {
      $("#third").fadeOut(1500);
    })
    //slide
    
    $("#buttton").click(function()
    {
      $("#contenti1").slideUp(2000);
    })
    $("#butttoni").click(function()
    {
      $("#contenti1").slideDown(2000);
    })
   
    //animate
    $(".img").hover(function(){

      $(this).animate({
                    width: "280px", 
                    height: "280px", 
                    left: "10px"}, "slow");

    },
     function(){

      $(this).animate({
                    width: "250px", 
                    height: "250px", 
                    left: "10px"}, "slow");
    });
});