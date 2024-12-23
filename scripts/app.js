



let currentPlayer = 1;
let fakePlayer = -1;
let word = "";
let category = "";
let players = 0;
let language = "de";
let gameRunning = false;

$("#generateGame").on("click", function() {

    if(gameRunning == true){
        if (confirm("Achtung! Aktuell läuft eine Runde. Wenn du bestätigst, generierst du eine neue Runde! Drücke alternativ Abbrechen!") == false) {
            return;
        }
        endGame();
    }

    players = parseInt($("#playerCount").val());
    language = $("#language").val();

    if (players < 3 || isNaN(players)) {
        alert("Es müssen mindestens 3 Spieler sein.");
        return;
    }


    // Reset game state
    currentPlayer = 1;
    lastFakePlayer = fakePlayer;
    generateCount = 0
    while(lastFakePlayer == fakePlayer || generateCount < 5){
        fakePlayer = Math.floor(Math.random() * players) + 1;
        generateCount++;
    }
    gameRunning = true;

    // Load word from JSON
    const randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex]["word"][language];
    category = words[randomIndex]["category"][language];
    
    $("#instruction").text(`Reiche das Smartphone zu Spieler`);
    $("#next-player").text(`1`);
    $("#next-player").show();
    $("#showWord").text("Wort anzeigen");
    $("#category").text(category);
    $("#gameArea").removeClass("invisible");
});

$("#showWord").on("click", function() {
    if ($(this).text() === "Wort anzeigen") {
        $("#next-player").hide();
        $("#word").removeClass("text-bg-danger");
        $("#word").addClass("text-bg-light");

        if (currentPlayer === fakePlayer) {
            $("#instruction").text("Du bist der");
            $("#word").text("Fake-Künstler!");
            $("#word").removeClass("text-bg-light");
            $("#word").addClass("text-bg-danger");
        } else {
            $("#instruction").text(`Das Wort ist:`);
            $("#word").text(`${word}`);
        }
        $(this).text("Wort verbergen");
    } else {
        currentPlayer++;
        $("#word").text(``);
        $("#next-player").text(``);

        if (currentPlayer > players) {
            endGame();
        } else {
            $("#instruction").text(`Reiche das Smartphone zu Spieler`);
            $("#next-player").show();
            $("#next-player").text(`${currentPlayer}`);
            $(this).text("Wort anzeigen");
        }
    }
});

function endGame(){
    gameRunning = false;
    $("#instruction").text("Das Spiel ist vorbei!");
    $("#gameArea").addClass("invisible");
    $("#word").text(``);
    $("#next-player").text(``);
}