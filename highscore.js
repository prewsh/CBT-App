const highScoresList = document.getElementById('highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

highScoresList.innerHTML = highScores.map (scores =>{
    console.log(scores)
    return `<li class='high-score'>${scores.name} - ${scores.score}</li>`;
}).join('');