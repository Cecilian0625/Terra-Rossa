$(function() {
    $("#slider-range1").slider({
        range: true,
        min: 0,
        max: 50,
        values: [0, 50],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range1").slider("values", 0) +
        " - $" + $("#slider-range1").slider("values", 1));
});
