$(document).ready(function() {
    // Alert Button
    $("#alertButton").click(function() {
        alert("Hello! Thanks for visiting my website.");
    });

    // Expand/Contract Content
    $("#expandable h3").click(function() {
        $("#expandable .content").slideToggle();
    });

    // Hover Effect
    $(".hover-highlight").hover(
        function() {
            $(this).css("color", "red");
        },
        function() {
            $(this).css("color", "black");
        }
    );
});
