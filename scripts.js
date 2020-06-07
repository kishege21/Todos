let todo = ".list";
let button = "button";
let input = ".input"

let count = 0;
$(button).click (function () {
    count++;
    $(todo).append("<li id=count++>" + $("input").val() + "</li>")
    
})

$("li").click (function () {
    $("li").css("text-decoration", "line-through")
    
});