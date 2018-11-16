/**
 * Created by d.mamatkulov on 16.11.2018.
 */

var map_array = [];
$('.mt-st').map(function() {
    map_array.push($(this).data('ip'));
});


$.each( map_array, function( key, value ) {
    var cl;
    $.ajax({
        url: '/admin/ru/gear/get-status?ip='+value,
        type: 'GET',
        success: function(result) {
            if(result == true) {
                cl = '*[data-ip="'+value+'"]';
                $(cl).text("REACHEABLE");
            } else {
                cl = '*[data-ip="'+value+'"]';
                $(cl).text("UNREACHEABLE");
            }
        },
    });
});