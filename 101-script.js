$(document).ready(function() {
    // Add a new item to the list
    $('#add_item').click(function() {
        $('<li>Item</li>').appendTo('ul.my_list');
    });

    // Remove the last item from the list
    $('#remove_item').click(function() {
        $('ul.my_list li:last').remove();
    });

    // Clear all items from the list
    $('#clear_list').click(function() {
        $('ul.my_list').empty();
    });
});
