$(function(){
    // pay CLOSE attention to the 2nd parameter
    $("ul").on("click", "li", function(e){
        console.log("You just clicked on ", $(e.target).text());
    });
});