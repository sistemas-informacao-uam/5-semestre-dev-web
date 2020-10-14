$(".add").click(function(){
    $(".camps").append("<div class='camp'><span>Campo: </span><input /></div>");
});

$(".remove").click(function(){
    $(".camps .camp").last().remove();
});