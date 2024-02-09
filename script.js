let btnTeam1 = document.querySelector('.btn-team1')
let btnTeam2 = document.querySelector('.btn-team2')
let team1Input = document.querySelector('.team1Input')
let team2Input = document.querySelector('.team2Input')
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')


btnTeam1.addEventListener('click',function(){
    team1.innerHTML = team1Input.value
    team1Input.style.display = 'none'
    btnTeam1.style.display = 'none'
    team2Input.style.display = 'inline'
    btnTeam2.style.display = 'inline'
})
btnTeam2.addEventListener('click',function(){
    team2.innerHTML = team2Input.value
    team2Input.style.display = 'none'
    btnTeam2.style.display = 'none'
   
})

