//get browser default language
const browserLanguage = navigator.language || navigator.languages[0];
let lang = browserLanguage.slice(0, 2);
lang = lang == "de" ? lang : "en"

var i18n = $.i18n({"locale": lang});
var language = i18n.locale;

i18n.load({
    "de": {
        "page-title": "Fake Artist Wortgenerator",
        "app-title": "Wortgenerator für \"A fake artist goes to New York\"",
        "language-select": "Sprache",
        "game-setup-title": "Dein Setup",
        "game-setup-player-count-title": "Spieleranzahl:",
        "game-setup-player-count-value": "Anzahl eingeben...",
        "game-setup-player-min-alert": "Es müssen mindestens 3 Spieler sein.",
        "game-setup-generate": "Spielrunde generieren",
        "game-setup-show-word-category": "Wortkategorie für alle anzeigen",
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
        "app-report-bug": "Fehler melden",
        "app-change-cookies": "Cookies-Einstellungen ändern",
        "info-modal-title": "Über die App",
        "info-modal-howto-title": "Anleitung",
        "info-modal-howto-step1": "Anzahl an Spielern eingeben",
        "info-modal-howto-step2": "Wähle aus, ob die Wortkategorie allen Spielern angezeigt werden soll (Standard: ja, Spiel wird einfacher für Fake-Künstler, schwieriger für Malende)",
        "info-modal-howto-step3": "Generiere eine Spielrunde",
        "info-modal-howto-step4": "Reiche das Smartphone an jeden Spieler",
        "info-modal-howto-step5": "Jeder Spieler sieht das Wort (oder erhält die Info, dass er der Fake-Künstler ist)",
        "info-modal-features-title": "Features",
        "info-modal-features-feat1": "Wörterliste mit mehr als 150 Wörtern",
        "info-modal-features-feat2": "Automatischer Spielleiter",
        "info-modal-features-feat3": "Keine Werbung",
        "info-modal-features-feat4": "Unterstützt Englisch & Deutsch",
        "info-modal-info-title": "Über das Spiel",
        "info-modal-info-text": "\"A Fake Artist Goes To New York\" ist ein Spiel für 5 bis 10 Spieler. Man muss zeichnen und herausfinden wer der falsche Künstler sein könnte. Dies herauszufinden während man zeichnen muss ist nicht so einfach, wie man denkt...!",
        "info-modal-info-link": "Zur Spielanleitung gehts hier.",
        "info-modal-close": "Schließen"
    },
    "en": {
        "page-title": "Fake Artist word generator companion app",
        "app-title": "Word generator for \"A fake artist goes to New York\"",
        "language-select": "Language",
        "game-setup-title": "Your Setup",
        "game-setup-player-count-title": "Player count:",
        "game-setup-player-count-value": "Enter number...",
        "game-setup-player-min-alert": "There must be at least three players.",
        "game-setup-generate": "Generate game",
        "game-setup-show-word-category": "Display word category to all",
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
        "app-report-bug": "Report bugs",
        "app-change-cookies": "Update cookies preferences",
        "info-modal-title": "About the app",
        "info-modal-howto-title": "How to use?",
        "info-modal-howto-step1": "Enter the number of players",
        "info-modal-howto-step2": "Select whether the word category should be known to all players (default: yes, game becomes easier for fake artist, harder for painters)",
        "info-modal-howto-step3": "Generate game",
        "info-modal-howto-step4": "The smartphone is handed to each player",
        "info-modal-howto-step5": "Each players will see the word (or receives the information that he is the fake artist)",
        "info-modal-features-title": "Features of this app",
        "info-modal-features-feat1": "Words list with more than 150 unique words",
        "info-modal-features-feat2": "Full automatic game master",
        "info-modal-features-feat3": "No ads",
        "info-modal-features-feat4": "Supports English and German as languages",
        "info-modal-info-title": "Information about the game",
        "info-modal-info-text": "\"A Fake Artist Goes To New York\" is a game for 5 - 10 players. You have to draw and to conclude. Trying to conclude something while drawing is not as easy as you think...!",
        "info-modal-info-link": "See game instructions.",
        "info-modal-close": "Close"
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