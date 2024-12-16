$(document).ready(function() {
    $("#alertButton").click(function() {
        alert("Hello! Thanks for visiting my website.");
    });
});
$(".hover-highlight").hover(
    function() {
        $(this).css("color", "red");
    },
    function() {
        $(this).css("color", "black");
    }
);
$("#expandable h3").click(function() {
    $("#expandable .content").slideToggle();
});
$(document).ready(function() {
    let hour = new Date().getHours();
    if (hour < 12) {
        $("body").css("background-color", "#f0f8ff"); // Morning - Light Blue
    } else if (hour < 18) {
        $("body").css("background-color", "#f4a460"); // Afternoon - Sandy Brown
    } else {
        $("body").css("background-color", "#2c3e50"); // Evening - Dark Blue
        $("body").css("color", "#fff"); // Light text for contrast
    }
});
