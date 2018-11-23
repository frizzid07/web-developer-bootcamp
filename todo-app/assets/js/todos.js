// Todo Status
$("ul").on("click", "li", function() {
    $(this).toggleClass("selected");
});

// Deleting Todos
$("ul").on("click", "span", function(e) {
    // Deleted todo fades out
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Inserting new Todo
$("input[type='text']").on("keypress", function() {
    if (event.which == 13) {
        // Grabbing text input
        var todo = $(this).val();
        // Creating a new entry
        $("ul").append("<li><span class='item'><i class='fas fa-trash-alt'></i></span>" +todo+ "</li>");
        $(this).val("");
    }
});

// Toggling the Input Bar
$(".toggle").on("click", function() {
    $("input[type='text']").slideToggle(300);
    $(this).toggleClass("fa-chevron-up", 500);
});

// Random Background Gradients
// function newGradient() {
//     var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16),
//         randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
//     return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')'
// }

// $('body').css('background' ,newGradient());

// setInterval(function() {
//     $('body').css('background', newGradient())
// }, 10000)