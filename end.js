const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScoreNow = document.getElementById('finalScore')


const mostRecentScore = localStorage.getItem("mostRecentScore")
finalScoreNow.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked oga , clicked")
    e.preventDefault();
}