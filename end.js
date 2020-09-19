const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScoreNow = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORE = 5
console.log(highScores);


finalScoreNow.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked oga , clicked")
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score );
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/")

    console.log(highScores)
}