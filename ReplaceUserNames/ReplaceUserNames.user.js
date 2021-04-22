// ==UserScript==
// @name         Replace user names
// @version      1.0.0
// @description  Ersetzt die Namen eurer Verbandmitglieder im Chat. Gut bei Mitgliedern mit ähnlichen user names :)
// @author       Metablex
// @include      *://www.leitstellenspiel.de/
// @include      *://leitstellenspiel.de/
// @grant        none
// @updateURL    https://github.com/Metablex/LSS-Scripts/raw/master/ReplaceUserNames/ReplaceUserNames.user.js
// @downloadURL  https://github.com/Metablex/LSS-Scripts/raw/master/ReplaceUserNames/ReplaceUserNames.user.js
// ==/UserScript==
/* global $ */

(function() {
    'use strict';

    // Diese Struktur entsprechend deiner Wünsche ändern!
    // "User ID": "Name der angezeigt werden soll"
    var dict = {
        "0815": "Name",
    };

    var replaceFunction = function() {
        for (var userId in dict){
            var replacingName = dict[userId];
            $('#mission_chat_messages a[class*="lightbox-open"]').each(function(){
                if ($(this).attr('href').replace(/\D+/g,'') == userId){
                    $(this).text(replacingName)
                }
            });
        }
    };

    replaceFunction();

    var mutationObserver = new MutationObserver(replaceFunction);
    mutationObserver.observe($("#mission_chat_messages")[0], {
        childList: true
    });
})();
