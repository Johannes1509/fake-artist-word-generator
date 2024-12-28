//get browser default language
const browserLanguage = navigator.language || navigator.languages[0];
let lang = browserLanguage.slice(0, 2);
lang = lang == "de" ? lang : "en"

var i18n = $.i18n({"locale": lang});
var language = i18n.locale;



$(document).ready(function(){
    i18n.load({
        "de": "i18n/de.json",
        "en": "i18n/en.json"
    }).done(function(){
        $("body").i18n();
        document.title = $.i18n("page-title");
        language = i18n.locale;
        if(language === "de"){
            $('#language').val("de").change();
        }
    });
})

$('#language').on('change', function() {
    if(gameRunning){
        if (confirm($.i18n('game-reset-confirm')) == false) {
            return;
        }
        endGame();
    }
    i18n.locale = this.value;
    $("body").i18n();
    document.title = $.i18n("page-title");
    language = i18n.locale;
});