//get browser default language
const browserLanguage = navigator.language || navigator.languages[0];
let lang = browserLanguage.slice(0, 2);
lang = lang == "de" ? lang : "en"

var i18n = $.i18n({"locale": lang});
var language = i18n.locale;

i18n.load({
    "de": {
        "page-title": "Fake Artist Wortgenerator",
        "app-title": "Inoffizieller Wortgenerator für das Spiel \"A fake artist goes to New York\" von Oink Games",
        "language-select": "Sprache",
        "game-setup-title": "Dein Setup",
        "game-setup-player-count-title": "Spieleranzahl:",
        "game-setup-player-count-value": "Anzahl eingeben...",
        "game-setup-player-min-alert": "Es müssen mindestens 3 Spieler sein.",
        "game-setup-generate": "Spielrunde generieren",
        "game-setup-show-word-category": "Wortkategorie für alle Spieler anzeigen",
        "game-title": "Generierte Spielrunde",
        "game-instruction-pass": "Reiche das Smartphone zu Spieler",
        "game-instruction-fake-artist-description": "Du bist der",
        "game-instruction-fake-artist-msg": "Fake-Künstler!",
        "game-show-word": "Wort anzeigen",
        "game-hide-word": "Wort verbergen",
        "game-word-intro": "Das Wort ist",
        "game-word-category-title": "Wortkategorie der Runde: ",
        "game-reset-confirm": "Achtung! Aktuell läuft eine Runde. Wenn du bestätigst, generierst du eine neue Runde! Drücke alternativ Abbrechen!",
        "game-end": "Das Spiel ist vorbei!",
        "app-imprint": "Impressum",
        "app-icons-by": "von",
        "app-creator-by": "Erstellt von",
        "app-creator-with": "mit",
        "app-report-bug": "Fehler melden"
    },
    "en": {
        "page-title": "Fake Artist word generator",
        "app-title": "Unofficial word generator for the game \"A fake artist goes to New York\" from Oink Games",
        "language-select": "Language",
        "game-setup-title": "Your Setup",
        "game-setup-player-count-title": "Player count:",
        "game-setup-player-count-value": "Enter number...",
        "game-setup-player-min-alert": "There must be at least three players.",
        "game-setup-generate": "Generate game",
        "game-setup-show-word-category": "Display word category to all players",
        "game-title": "Generated game round",
        "game-instruction-pass": "Pass the smartphone to the player",
        "game-instruction-fake-artist-description": "You are the",
        "game-instruction-fake-artist-msg": "fake artist!",
        "game-show-word": "Show word",
        "game-hide-word": "Hide word",
        "game-word-intro": "The word is",
        "game-word-category-title": "Word category of game round:",
        "game-reset-confirm": "Attention! A round is currently running. If you confirm, you will generate a new round! Alternatively, press cancel!",
        "game-end": "The game is over!",
        "app-imprint": "Imprint",
        "app-icons-by": "by",
        "app-creator-by": "Created by",
        "app-creator-with": "with",
        "app-report-bug": "Report bugs"
    }
});

$(document).ready(function(){
    $("body").i18n();
    document.title = $.i18n("page-title");
    language = i18n.locale;
    if(language === "de"){
        $('#language').val("de").change();
    }
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