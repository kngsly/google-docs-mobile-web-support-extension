// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mobile google docs web support
// @author       You
// @match        https://docs.google.com/document/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // fix width
    $(".doc > div").attr("style", "padding: 0 !important;");

    $("sup > a").each(function(i, v) {
        console.log()

        // get links
        var cmnt = $(this).attr("href");
        // get comment text
        var txt = $(cmnt).parent().text();
        // clean comment text
        txt = txt.split("]")[1];

        // link text parent formatting (comment section)
        // fancy styling
        var container = $(this).parent().parent().children("span");
        container.attr("title", txt);
        container.css("border-bottom", "2px dotted rgb(255, 0, 0)");
        container.css("padding", "0 7px");

        // remove original link text
        $(this).parent().remove();

        // fun flashy comment
        setInterval(function() {
            container.css("border-bottom-color", "rgb(" + ran() + ", " + ran() + ", " + ran() + ")");
        }, 100);

    });

    function ran() { return (1 + Math.floor(Math.random() * 255)); }
})();
