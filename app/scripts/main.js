'use strict';

$(document).ready(function() {
    var activeTab = '#task-02'; // default

    if (window.location.hash) {
        activeTab = window.location.hash;
    }

    $('.navigation-tabs a[href="' + activeTab + '"]').tab('show');

    $('.navigation-tabs a').click(function (e) {
        $(this).tab('show');
    });


    prettyPrint();
});
