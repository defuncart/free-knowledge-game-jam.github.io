function render_actions() {
    var $actions = $('#actions');
    $actions.html('');
    $(player.actions).each(function(i, el) {
        var $action;
        if ((playerSupport >= el.supportNeeded) && el.isUnlocked) {
            $actions.append('<button class="btn btn-primary">' + el.text + '</button>');
        }
    });
}

function update_map(region_id, player_support) {
    var $county = $('.county-' + region_id).hide();
    if (player_support < 45) {
        // color red
        $county.filter('.map-layer-failure').show();
    } else if (player_support > 55) {
        // color green
        $county.filter('.map-layer-success').show();
    } else {
        // color brown - default
    }
}

function random_coloring() {
    $(counties).each(function(i, el) {
        update_map(el.id, Math.floor((Math.random() * 100)));
    });
    setTimeout(random_coloring, 1000);
}


$(function() {
    render_actions();

    $('#actions').on('click', '.btn', function(e) {
        e.preventDefault();
        alert($(this).text());
    });    
    
    // test colouring
    random_coloring();
});