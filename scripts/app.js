

let currentPlayer = 1;
let fakePlayer = -1;
let word = "";
let category = "";
let players = 0;
var gameRunning = false;
let gameStatus = "";
let showWordCategory = true;

$("#showWordCategoryCheck").on("click", function () {
    if (gameRunning == true) {
        if (confirm($.i18n('game-reset-confirm')) == false) {
            //reset value
            $('#showWordCategoryCheck').prop('checked', showWordCategory);
            return;
        }
        endGame();
    }
    showWordCategory = $('#showWordCategoryCheck').is(":checked");
});

$("#generateGame").on("click", function () {

    if (gameRunning == true) {
        if (confirm($.i18n('game-reset-confirm')) == false) {
            return;
        }
        endGame();
    }

    players = parseInt($("#playerCount").val());

    if (players < 3 || isNaN(players)) {
        alert($.i18n("game-setup-player-min-alert"));
        return;
    }


    // Reset game state
    currentPlayer = 1;
    lastFakePlayer = fakePlayer;
    generateCount = 0
    while (lastFakePlayer == fakePlayer || generateCount < 5) {
        fakePlayer = Math.floor(Math.random() * players) + 1;
        generateCount++;
    }
    gameRunning = true;

    // Load word from JSON
    const randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex]["word"][language];
    category = words[randomIndex]["category"][language];

    $("#instruction").text($.i18n("game-instruction-pass"));
    $("#next-player").text(`1`);
    $("#next-player").show();
    $("#showWord").text($.i18n("game-show-word"));

    if(showWordCategory){
        $("#category").text(category);
        $(".word-category-visible").removeClass("d-none");
    }else{
        $(".word-category-visible").addClass("d-none");
    }

    $("#gameArea").removeClass("invisible");
});

$("#showWord").on("click", function () {
    if ($(this).text() === i18n.messageStore.get("de", "game-show-word")
        || $(this).text() === i18n.messageStore.get("en", "game-show-word")) {
        $("#next-player").hide();
        $("#word").removeClass("text-bg-danger");
        $("#word").addClass("text-bg-light");

        if (currentPlayer === fakePlayer) {
            $("#instruction").text($.i18n("game-instruction-fake-artist-description"));
            $("#word").text($.i18n("game-instruction-fake-artist-msg"));
            $("#word").removeClass("text-bg-light");
            $("#word").addClass("text-bg-danger");
        } else {
            $("#instruction").text($.i18n("game-word-intro"));
            $("#word").text(`${word}`);
        }
        $(this).text($.i18n("game-hide-word"));
    } else {
        currentPlayer++;
        $("#word").text(``);
        $("#next-player").text(``);

        if (currentPlayer > players) {
            endGame();
        } else {
            $("#instruction").text($.i18n("game-instruction-pass"));
            $("#next-player").show();
            $("#next-player").text(`${currentPlayer}`);
            $(this).text($.i18n("game-show-word"));
        }
    }
});


function endGame() {
    gameRunning = false;
    $("#instruction").text($.i18n("game-end"));
    $("#gameArea").addClass("invisible");
    $("#word").text("");
    $("#next-player").text("");
}