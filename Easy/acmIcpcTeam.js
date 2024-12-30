// pseudo code:
// n = number of ppl
// topic


// we have an array of topics and n ppl
// in this array, there are binary coded string for each member's known topic
// create a team that knows max numbered topics
// return how many teams knows that max numbered topics.

function acmTeam(topic) {

    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i+1; j < topic.length; j++) {
            let currentTopics = 0;

            // compare each teams topic position
            for(let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === "1" || topic[j][k] === "1") {
                    currentTopics++;
                }
            }

            if (currentTopics > maxTopics) {
                maxTopics = currentTopics; // new record
                teamCount = 1;
            }
            else if (currentTopics === maxTopics) {
                teamCount++; // another team found
            }
        }
    }

return [maxTopics, teamCount];

}