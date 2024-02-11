

/*=====================================================================
            #Team name Start
=======================================================================*/ 
let btnTeam1 = document.querySelector('.btn-team1')
let btnTeam2 = document.querySelector('.btn-team2')
let team1Input = document.querySelector('.team1Input')
let team2Input = document.querySelector('.team2Input')
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let error1 = document.querySelector('.error1')

btnTeam1.addEventListener('click',function(){
    if(!team1Input.value){
        error1.innerHTML= 'please enter team name.'
    }
   else if(team1Input.value.length<3){
        error1.innerHTML= 'Team name must be at least 3 characters long.'
    }
   
    else{
        
            team1.innerHTML = team1Input.value
            tossTeam1.innerHTML = team1Input.value
            team1Input.style.display = 'none'
            btnTeam1.style.display = 'none'
            team2Input.style.display = 'inline'
            btnTeam2.style.display = 'inline'
            error1.innerHTML= '';
        
       
    }
   
   
})
btnTeam2.addEventListener('click',function(){
    if(!team2Input.value){
        error1.innerHTML= 'please enter team name.'
    }
   else if(team2Input.value.length<3){
        error1.innerHTML= 'Team name must be at least 3 characters long.'
    }
   
    else{
        team2.innerHTML = team2Input.value
        tossTeam2.innerHTML = team2Input.value
        team2Input.style.display = 'none'
        btnTeam2.style.display = 'none'
        toss.style.display = 'block'
        error1.innerHTML =''
    }
   
})
/*=====================================================================
            #Team name End
=======================================================================*/ 


/*=========================================================
            #Toss part start
=========================================================*/
let toss = document.querySelector('.toss')
let tossTeam1 = document.querySelector('.toss-team1')
let tossTeam2 = document.querySelector('.toss-team2')
let battingFirstOrTarget = document.querySelector('.battingFirstOrTarget')
let battingFirst= document.querySelector('.battingFirst')
let battingTarget= document.querySelector('.battingTarget')

tossTeam1.addEventListener('click',function(){
    battingFirstOrTarget.style.display = 'inline-block'
    toss.style.display = 'none'
    scoreCard.innerHTML = tossTeam1.innerHTML
})
tossTeam2.addEventListener('click',function(){
    battingFirstOrTarget.style.display = 'inline-block'
    toss.style.display = 'none'
    scoreCard.innerHTML = tossTeam2.innerHTML
})

battingFirst.addEventListener('click',function(){
    battingFirstOrTarget.style.display = 'none'
})

battingTarget.addEventListener('click',function(){
    battingFirstOrTarget.style.display = 'none'
    target.style.display = 'block'
})
/*=========================================================
            #Toss part end
=========================================================*/
/*=========================================================
            #ScoreCard part start
=========================================================*/
let scoreCard= document.querySelector('.scoreCard')
let totalRunMinus= document.querySelector('.totalRunMinus')
let totalRunPlus= document.querySelector('.totalRunPlus')
let totalRunDouble= document.querySelector('.totalRunDouble')
let totalRunFour= document.querySelector('.totalRunFour')
let totalRunSix= document.querySelector('.totalRunSix')
let totalRun= document.querySelector('.totalRun')
let totalWicket= document.querySelector('.totalWicket')
let TeamWicket= document.querySelector('.TeamWicket')
let runIncrmenterDeincrementer= document.querySelector('.runIncrmenterDeincrementer')

let runCounter=0;
totalRunMinus.addEventListener('click',function(){
    if(runCounter>=1){
        runCounter--;
        totalRun.innerHTML=runCounter;
    }
})


totalRunPlus.addEventListener('click',function(){
    runCounter++;
    totalRun.innerHTML=runCounter;
})

totalRunDouble.addEventListener('click',function(){
    runCounter+=2;
    totalRun.innerHTML=runCounter;
})
totalRunFour.addEventListener('click',function(){
    runCounter+=4;
    totalRun.innerHTML=runCounter;
})
totalRunSix.addEventListener('click',function(){
    runCounter+=6;
    totalRun.innerHTML=runCounter;
})

let wicketConter= 0;
TeamWicket.addEventListener('click',function(){
        if(wicketConter>=0 && wicketConter<9){

            wicketConter++;
            totalWicket.innerHTML = wicketConter;
            
        }
        else{
            totalWicket.innerHTML= '10'
            runIncrmenterDeincrementer.style.display= 'none'
        }
})



/*=========================================================
            #ScoreCard part end
=========================================================*/


/*=========================================================
            #target part start
=========================================================*/
let target = document.querySelector('.target')
let targetInput = document.querySelector('.targetInput')
let targetRuns = document.querySelector('.targetRuns')
let targetBtn = document.querySelector('.targetBtn')
let targetName = document.querySelector('.targetName')
let error2 = document.querySelector('.error2')

targetBtn.addEventListener('click',function(){
    if(!targetInput.value || targetInput.value<1){
        error2.innerHTML = 'Invalid'
    }else{
        targetRuns.innerHTML = targetInput.value;
        targetName.style.display = 'block'
        error2.innerHTML = ''
        target.style.display = 'none'
    }
    
})

/*=========================================================
            #target part end
=========================================================*/
/*=========================================================
            #Batter part start
=========================================================*/


/*=========================================================
            #Batter part end
=========================================================*/