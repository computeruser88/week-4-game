$(document).ready(function () {
    var crystals = [0, 0, 0, 0];
    var randomTargetNumber = 0;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    function initialize() {
        for (var i = 0; i < crystals.length; i++) {
            crystals[i] = Math.floor(Math.random() * 12) + 1;
            console.log("Crystal " + crystals[i]);
        }
        randomTargetNumber = Math.floor(Math.random() * 102) + 19;
        console.log("randomTargetNumber " + randomTargetNumber);
        $("#target-random-number").text(randomTargetNumber);
        totalScore = 0;
        $("#total-score").text(totalScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    initialize();

    $("aside").on("click", "#amethyst", function () {
        totalScore += crystals[0];
        $("#total-score").text(totalScore);
        console.log("Total score " + totalScore);
        winOrLose();
    }).on("click", "#diamond", function () {
        totalScore += crystals[1];
        $("#total-score").text(totalScore);
        console.log("Total score " + totalScore);
        winOrLose();
    }).on("click", "#sapphire", function () {
        totalScore += crystals[2];
        $("#total-score").text(totalScore);
        console.log("Total score " + totalScore);
        winOrLose();
    }).on("click", "#yellow-diamond", function () {
        totalScore += crystals[3];
        $("#total-score").text(totalScore);
        console.log("Total score " + totalScore);
        winOrLose();
    });
    function winOrLose() {
        if (totalScore === randomTargetNumber) {
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            initialize();
        } else if (totalScore > randomTargetNumber) {
            alert("You lost!");
            losses++;
            $("#losses").text(losses);
            initialize();
        }
    }
});
