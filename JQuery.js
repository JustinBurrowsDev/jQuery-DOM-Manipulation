$(document).ready(function() {
    //when the user clicks on a given title i want the corresponding block to show its text
    //the default state for evey block is to have it's content not showing

    $("#tabs").on("click", "a", function() {
        $(".content").removeClass("show")
        $("a").removeClass("active")

        $(this).addClass("active")
        $(this)
            .find("+ .content")
            .addClass("show")
    })
})