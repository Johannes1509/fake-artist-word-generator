//get browser default language
const browserLanguage = new URLSearchParams(window.location.search).get("lang")
    || navigator.language || navigator.languages[0] || "en";
let lang = browserLanguage.slice(0, 2);

switch(lang){
    case "de":
    case "en":
    case "fr":
    case "es":
    case "tr":
    case "sv":
    case "pl":
        break;
    default:
        lang = "en"
}

const i18n = $.i18n({"locale": lang});
let language = i18n.locale;

$(document).ready(function(){
    i18n.load({
        "de": "i18n/de.json",
        "en": "i18n/en.json",
        "es": "i18n/es.json",
        "tr": "i18n/tr.json",
        "fr": "i18n/fr.json",
        "sv": "i18n/sv.json",
        "pl": "i18n/pl.json"
    }).done(function(){
        applyLanguage();
    });
})

$('#language').on('change', function() {
    if(gameRunning){
        if (confirm($.i18n('game-reset-confirm')) == false) {
            $(this).val(language);
            return;
        }
        endGame();
    }
    i18n.locale = this.value;
    applyLanguage();
});

function applyLanguage() {
    language = i18n.locale;
    $("html").attr("lang", language);
    $("body").i18n();
    document.title = $.i18n("page-title");
    $("#language").val(language);
    $("#imprint-content").html($.i18n("imprint-content"));
    // Keep the chosen language when navigating to the legal page and back.
    $('a[href^="imprint.html"]').attr("href", "imprint.html?lang=" + language);
    $('a[href^="index.html"]').attr("href", "index.html?lang=" + language);
}
