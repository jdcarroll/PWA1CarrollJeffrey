/**
 * Created by jeffreycarroll on 10/4/14.
 *
 * Create three variables for each player of the two players.
 player’s name
 ex: var playerOneName = “Spiderman”
 player’s remaining health
 ex: var playerOneHealth = 100;
 player’s damage. This variable determines the amount of maximum damage per round that the player causes.
 ex: var playerOneDamge = 50;
 *
 */

(function(){

    //Player one Variables
    var playerOneName = "Spider Man";
    var playerOneHealth = 100;
    var playerOneDamage = 50;

    //Player two Variables
    var playerTwoName = "Bat Man";
    var playerTwoHealth = 100;
    var playerTwoDamage = 50;

    var round = 0;


    function fight(){
        alert(playerOneName + " : " + playerOneHealth + " *START* " + playerTwoName + " : " + playerTwoHealth)

        for (var i = 0 ; i < 10 ; i ++ ){
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamagePlayer1 = playerOneDamage * .5;
            var minDamagePlayer2 = playerTwoDamage * .5;

            var fightPlayer1 = Math.floor(Math.random() * (playerOneDamage - minDamagePlayer1) + minDamagePlayer1);
            var fightPlayer2 = Math.floor(Math.random() * (playerTwoDamage - minDamagePlayer2) + minDamagePlayer2);

            playerOneHealth -= fightPlayer1;
            playerTwoHealth -= fightPlayer2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            alert(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            var findings = win();
            console.log(findings);
            if (findings==="there was a tie!")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(findings);
                break;
            };
        }
    }

    function win(){
        var result = "there was a tie!";
        if ( ( playerOneHealth < 1 ) && ( playerTwoHealth < 1 ) ){
            result = "you both DIE!!!!"
        } else if (playerOneHealth < 1){
            result = playerTwoName + " Wins!!!!"
        } else if (playerTwoHealth < 1){
            result = playerOneName + " Wins!!!!"
        }
        return result;

    }

    fight();
})();
