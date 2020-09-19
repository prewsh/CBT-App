const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScoreNow = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
console.log(mostRecentScore)

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORE = 5
console.log(highScores);


finalScoreNow.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        // score: Math.floor(Math.random()*100),
        score: mostRecentScore,
        name: username.value
    };

    console.log( 'i amd' + score)

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score );
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/")

    console.log(highScores)
}