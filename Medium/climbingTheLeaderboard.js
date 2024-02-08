/* An arcade game player wants to climb to the top of the 
leaderboard and track their ranking. The game uses Dense Ranking,
so its leaderboard works like this:
The player with the highest score is ranked number on the leaderboard.
Players who have equal scores receive the same ranking number,
 and the next player(s) receive the immediately following ranking number.

 */

 function climbingLeaderboard(ranked, player) {
    // first remove duplicate scores from the ranked array
    let uniqueRanked = [...new Set(ranked)];
    
    let result = [];
    
    // last index of the uniqueRanked array
    let j = uniqueRanked.length - 1;
    
    for (let i = 0; i < player.length; i++) {

        while (player[i] >= uniqueRanked[j]) {
            // move to the previous index if the players score is greater or equal
            j--;
        }
        
        // push the rank of the player's score into the result array
        // determined by the index of the last score that is smaller than the player's score, plus 2
        result.push(j + 2);
    }
    
    return result;
}