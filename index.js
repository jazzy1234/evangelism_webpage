//Buttons toggle Javascript


$(".one").on("click", function(){
    event.preventDefault();
    $(".details-one").fadeToggle();
    $(this).text($(this).text() == "View Details »" ? "Hide Details »" : "View Details »"); 
});

$(".two").on("click", function(){
    event.preventDefault();
    $(".details-two").fadeToggle();
    $(this).text($(this).text() == "View Details »" ? "Hide Details »" : "View Details »"); 
});

$(".three").on("click", function(){
    event.preventDefault();
    $(".details-three").fadeToggle();
    $(this).text($(this).text() == "View Details »" ? "Hide Details »" : "View Details »"); 
});