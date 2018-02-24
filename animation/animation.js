$(document).ready(function(){
    $("article").hide();
    $("article").fadeIn(2000); // fade in over 2000 milliseconds (there are also animations for sliding as well)
    var toggleShow = true;
    $("article").on("click", function(){
        if(toggleShow){
            $("#edit_user").show();
        } else {
            $("#edit_user").hide();  
        }
        $(".items").slideToggle(500); // if hidden, then slideIn. If showing, then slideOut.
        toggleShow = !toggleShow;  // switch the value of the boolean  
    });
});