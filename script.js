

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
    overLimitPortion.style.display ='block'
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
let undo1= document.querySelector('.undo1')
let scoreAndOver= document.querySelector('.scoreAndOver')
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
        if(wicketConter>=0 && wicketConter<10){

            wicketConter++;
            totalWicket.innerHTML = wicketConter;
            
        }
        else{
            totalWicket.innerHTML= wicketConter;
            runIncrmenterDeincrementer.style.display= 'none'
            overIncrementDecrement.style.display = 'none'
            undo1.style.display = 'block'
        }
})

undo1.addEventListener('click',function(){
    runIncrmenterDeincrementer.style.display= 'block'
    totalWicket.innerHTML= wicketConter;
    undo1.style.display = 'none'
    overIncrementDecrement.style.display = 'inline'
    totalOvar.innerHTML= overCounter
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
        error2.innerHTML= ''
        overLimitPortion.style.display = 'block'
    }
    
})

/*=========================================================
            #target part end
=========================================================*/
/*=========================================================
            #Over part start
=========================================================*/
let totalOvar = document.querySelector('.totalOvar')
let totalOverMinus = document.querySelector('.totalOverMinus')
let totalOverPlus = document.querySelector('.totalOverPlus')
let overLimit = document.querySelector('.overLimit')
let overLimitBtn = document.querySelector('.overLimitBtn')
let error3 = document.querySelector('.error3')
let overLimitPortion = document.querySelector('.overLimitPortion')
let overIncrementDecrement = document.querySelector('.overIncrementDecrement')

let overCounter =0;

totalOverMinus.addEventListener('click',function(){
    if(overCounter>0){
        overCounter--;
        totalOvar.innerHTML = overCounter;
    }
})
totalOverPlus.addEventListener('click',function(){
    if(overCounter>=0 && overCounter<overLimit.value){
        overCounter++;
        totalOvar.innerHTML = overCounter;
     
    }else{
      
            overIncrementDecrement.style.display = 'none'
            runIncrmenterDeincrementer.style.display= 'none'
            totalOvar.innerHTML= overCounter;
            undo1.style.display = 'block'
        
    }
})

overLimitBtn.addEventListener('click',function(){
    if(!overLimit.value && overLimit.value<0){
        error3.innerHTML = 'Invalid'
    }
    else{
        overLimitPortion.style.display = 'none'
        scoreAndOver.style.display = 'block'
        batsman.style.display = 'block'
        
    }
})

/*=========================================================
            #Over part end
=========================================================*/
/*=========================================================
            #Batter part start
=========================================================*/
let batsman = document.querySelector('.batsman')
let batterBaller = document.querySelector('.batterBaller')
let bnInput = document.querySelector('.bnInput')
let batbtn = document.querySelector('.batbtn')
// Player portion #Start
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player3 = document.querySelector('.player3')
let player4 = document.querySelector('.player4')
let player5 = document.querySelector('.player5')
let player6 = document.querySelector('.player6')
let player7 = document.querySelector('.player7')
let player8 = document.querySelector('.player8')
let player9 = document.querySelector('.player9')
let player10 = document.querySelector('.player10')
let player11 = document.querySelector('.player11')
// Player portion #End

// p out portion #Start
let p1Out = document.querySelector('.p1Out')

let p2Out = document.querySelector('.p2Out')
let p3Out = document.querySelector('.p3Out')
let p4Out = document.querySelector('.p4Out')
let p5Out = document.querySelector('.p5Out')
let p6Out = document.querySelector('.p6Out')
let p7Out = document.querySelector('.p7Out')
let p8Out = document.querySelector('.p8Out')
let p9Out = document.querySelector('.p9Out')
let p10Out = document.querySelector('.p10Out')
let p11Out = document.querySelector('.p11Out')
// p out portion #End


// P portion #Start
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let p5 = document.querySelector('.p5')
let p6 = document.querySelector('.p6')
let p7 = document.querySelector('.p7')
let p8 = document.querySelector('.p8')
let p9 = document.querySelector('.p9')
let p10 = document.querySelector('.p10')
let p11 = document.querySelector('.p11')
// P portion #End
// b portion #Start
let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')
let b3 = document.querySelector('.b3')
let b4 = document.querySelector('.b4')
let b5 = document.querySelector('.b5')
let b6 = document.querySelector('.b6')
let b7 = document.querySelector('.b7')
let b8 = document.querySelector('.b8')
let b9 = document.querySelector('.b9')
let b10 = document.querySelector('.b10')
let b11 = document.querySelector('.b11')
// b portion #End
// b portion #Start
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')
let btn7 = document.querySelector('.btn7')
let btn8 = document.querySelector('.btn8')
let btn9 = document.querySelector('.btn9')
let btn10 = document.querySelector('.btn10')
let btn11 = document.querySelector('.btn11')
// b portion #End


// Out portion #tart
p1Out.addEventListener('click',function(){
    p1RunPlus.style.display = 'none'
    p1BallPlus.style.display = 'none'
    p1RunMinus.style.display = 'none'
    p1BallMinus.style.display = 'none'
    p1Out.style.display = 'none'
    p1Six.style.display = 'none'
    p1Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p1ballC++;
    p1Ball.innerHTML = p1ballC;
})
p2Out.addEventListener('click',function(){
    p2RunPlus.style.display = 'none'
    p2BallPlus.style.display = 'none'
    p2RunMinus.style.display = 'none'
    p2BallMinus.style.display = 'none'
    p2Out.style.display = 'none'
    p2Six.style.display = 'none'
    p2Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
})

p3Out.addEventListener('click',function(){
    p3RunPlus.style.display = 'none'
    p3BallPlus.style.display = 'none'
    p3RunMinus.style.display = 'none'
    p3BallMinus.style.display = 'none'
    p3Out.style.display = 'none'
    p3Six.style.display = 'none'
    p3Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
})
p4Out.addEventListener('click',function(){
    p4RunPlus.style.display = 'none'
    p4BallPlus.style.display = 'none'
    p4RunMinus.style.display = 'none'
    p4BallMinus.style.display = 'none'
    p4Out.style.display = 'none'
    p4Six.style.display = 'none'
    p4Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
})
p11Out.addEventListener('click',function(){
    p11RunPlus.style.display = 'none'
    p11BallPlus.style.display = 'none'
    p11RunMinus.style.display = 'none'
    p11BallMinus.style.display = 'none'
    p11Out.style.display = 'none'
    p11Six.style.display = 'none'
    p11Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})
p5Out.addEventListener('click',function(){
    p5RunPlus.style.display = 'none'
    p5BallPlus.style.display = 'none'
    p5RunMinus.style.display = 'none'
    p5BallMinus.style.display = 'none'
    p5Out.style.display = 'none'
    p5Six.style.display = 'none'
    p5Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
})
p6Out.addEventListener('click',function(){
    p6RunPlus.style.display = 'none'
    p6BallPlus.style.display = 'none'
    p6RunMinus.style.display = 'none'
    p6BallMinus.style.display = 'none'
    p6Out.style.display = 'none'
    p6Six.style.display = 'none'
    p6Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
})
p7Out.addEventListener('click',function(){
    p7RunPlus.style.display = 'none'
    p7BallPlus.style.display = 'none'
    p7RunMinus.style.display = 'none'
    p7BallMinus.style.display = 'none'
    p7Out.style.display = 'none'
    p7Six.style.display = 'none'
    p7Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
})
p8Out.addEventListener('click',function(){
    p8RunPlus.style.display = 'none'
    p8BallPlus.style.display = 'none'
    p8RunMinus.style.display = 'none'
    p8BallMinus.style.display = 'none'
    p8Out.style.display = 'none'
    p8Six.style.display = 'none'
    p8Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
})
p9Out.addEventListener('click',function(){
    p9RunPlus.style.display = 'none'
    p9BallPlus.style.display = 'none'
    p9RunMinus.style.display = 'none'
    p9BallMinus.style.display = 'none'
    p9Out.style.display = 'none'
    p9Six.style.display = 'none'
    p9Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
})
p10Out.addEventListener('click',function(){
    p10RunPlus.style.display = 'none'
    p10BallPlus.style.display = 'none'
    p10RunMinus.style.display = 'none'
    p10BallMinus.style.display = 'none'
    p10Out.style.display = 'none'
    p10Six.style.display = 'none'
    p10Four.style.display = 'none'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})
// Out portion #End
// Batter Name Protion #Start
let err2 = document.querySelector('.err2')
btn1.addEventListener('click',function(){
    if(!(b1.value)){
        err2.innerHTML = 'Write a Batter name.'
    }else{
        err2.style.display = 'none'
        p1.innerHTML = b1.value;
        player1.style.display= 'block'
        btn1.style.display = 'none'
        b1.style.display = 'none';
        btn2.style.display = 'inline-block'
        b2.style.display = 'inline-block';
    }
 
})
btn2.addEventListener('click',function(){
    if(!(b2.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p2.innerHTML = b2.value;
        player2.style.display= 'block'
        btn2.style.display = 'none'
        b2.style.display = 'none';
        btn3.style.display = 'inline-block'
        b3.style.display = 'inline-block';
    }
})
btn3.addEventListener('click',function(){
    if(!(b3.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p3.innerHTML = b3.value;
        player3.style.display= 'block'
        btn3.style.display = 'none'
        b3.style.display = 'none';
        btn4.style.display = 'inline-block'
        b4.style.display = 'inline-block';
    }
})
btn4.addEventListener('click',function(){
    if(!(b4.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p4.innerHTML = b4.value;
        player4.style.display= 'block'
        btn4.style.display = 'none'
        b4.style.display = 'none';
        btn5.style.display = 'inline-block'
        b5.style.display = 'inline-block';
    }
})
btn5.addEventListener('click',function(){
    if(!(b5.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p5.innerHTML = b5.value;
        player5.style.display= 'block'
        btn5.style.display = 'none'
        b5.style.display = 'none';
        btn6.style.display = 'inline-block'
        b6.style.display = 'inline-block';
    }
})
btn6.addEventListener('click',function(){
    if(!(b6.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p6.innerHTML = b6.value;
        player6.style.display= 'block'
        btn6.style.display = 'none'
        b6.style.display = 'none';
        btn7.style.display = 'inline-block'
        b7.style.display = 'inline-block';
    }
})
btn7.addEventListener('click',function(){
    if(!(b7.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p7.innerHTML = b7.value;
        player7.style.display= 'block'
        btn7.style.display = 'none'
        b7.style.display = 'none';
        btn8.style.display = 'inline-block'
        b8.style.display = 'inline-block';
    }
})
btn8.addEventListener('click',function(){
    if(!(b8.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p8.innerHTML = b8.value;
        player8.style.display= 'block'
        btn8.style.display = 'none'
        b8.style.display = 'none';
        btn9.style.display = 'inline-block'
        b9.style.display = 'inline-block';
    }
})
btn9.addEventListener('click',function(){
    if(!(b9.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p9.innerHTML = b9.value;
        player9.style.display= 'block'
        btn9.style.display = 'none'
        b9.style.display = 'none';
        btn10.style.display = 'inline-block'
        b10.style.display = 'inline-block';
    }
})
btn10.addEventListener('click',function(){
    if(!(b10.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p10.innerHTML = b10.value;
        player10.style.display= 'block'
        btn10.style.display = 'none'
        b10.style.display = 'none';
        btn11.style.display = 'inline-block'
        b11.style.display = 'inline-block';
    }
})
btn11.addEventListener('click',function(){
    if(!(b11.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p11.innerHTML = b11.value;
        player11.style.display= 'block'
        btn11.style.display = 'none'
        b11.style.display = 'none';
    }
})

// Batter Name Protion #End

// Player Run portion #start
let p1run = document.querySelector('.p1run')
let p2run = document.querySelector('.p2run')
let p3run = document.querySelector('.p3run')
let p4run = document.querySelector('.p4run')
let p5run = document.querySelector('.p5run')
let p6run = document.querySelector('.p6run')
let p7run = document.querySelector('.p7run')
let p8run = document.querySelector('.p8run')
let p9run = document.querySelector('.p9run')
let p10run = document.querySelector('.p10run')
let p11run = document.querySelector('.p11run')

// Player Run portion #End

// Player Ball face #start
let p1Ball = document.querySelector('.p1Ball')
let p2Ball = document.querySelector('.p2Ball')
let p3Ball = document.querySelector('.p3Ball')
let p4Ball = document.querySelector('.p4Ball')
let p5Ball = document.querySelector('.p5Ball')
let p6Ball = document.querySelector('.p6Ball')
let p7Ball = document.querySelector('.p7Ball')
let p8Ball = document.querySelector('.p8Ball')
let p9Ball = document.querySelector('.p9Ball')
let p10Ball = document.querySelector('.p10Ball')
let p11Ball = document.querySelector('.p11Ball')


// Player Ball face #End

// Player run+ #Start
let p1RunPlus = document.querySelector('.p1RunPlus')
let p2RunPlus = document.querySelector('.p2RunPlus')
let p3RunPlus = document.querySelector('.p3RunPlus')
let p4RunPlus = document.querySelector('.p4RunPlus')
let p5RunPlus = document.querySelector('.p5RunPlus')
let p6RunPlus = document.querySelector('.p6RunPlus')
let p7RunPlus = document.querySelector('.p7RunPlus')
let p8RunPlus = document.querySelector('.p8RunPlus')
let p9RunPlus = document.querySelector('.p9RunPlus')
let p10RunPlus = document.querySelector('.p10RunPlus')
let p11RunPlus = document.querySelector('.p11RunPlus')

// Player run+ #End

// Player run- #Start
let p1RunMinus = document.querySelector('.p1RunMinus')
let p2RunMinus = document.querySelector('.p2RunMinus')
let p3RunMinus = document.querySelector('.p3RunMinus')
let p4RunMinus = document.querySelector('.p4RunMinus')
let p5RunMinus = document.querySelector('.p5RunMinus')
let p6RunMinus = document.querySelector('.p6RunMinus')
let p7RunMinus = document.querySelector('.p7RunMinus')
let p8RunMinus = document.querySelector('.p8RunMinus')
let p9RunMinus = document.querySelector('.p9RunMinus')
let p10RunMinus = document.querySelector('.p10RunMinus')
let p11RunMinus = document.querySelector('.p11RunMinus')

// Player run- #End

// Player Ball+ #Start
let p1BallPlus = document.querySelector('.p1BallPlus')
let p2BallPlus = document.querySelector('.p2BallPlus')
let p3BallPlus = document.querySelector('.p3BallPlus')
let p4BallPlus = document.querySelector('.p4BallPlus')
let p5BallPlus = document.querySelector('.p5BallPlus')
let p6BallPlus = document.querySelector('.p6BallPlus')
let p7BallPlus = document.querySelector('.p7BallPlus')
let p8BallPlus = document.querySelector('.p8BallPlus')
let p9BallPlus = document.querySelector('.p9BallPlus')
let p10BallPlus = document.querySelector('.p10BallPlus')
let p11BallPlus = document.querySelector('.p11BallPlus')
// Player Ball+ #End

// Player Ball- #Start
let p1BallMinus = document.querySelector('.p1BallMinus')
let p2BallMinus = document.querySelector('.p2BallMinus')
let p3BallMinus = document.querySelector('.p3BallMinus')
let p4BallMinus = document.querySelector('.p4BallMinus')
let p5BallMinus = document.querySelector('.p5BallMinus')
let p6BallMinus = document.querySelector('.p6BallMinus')
let p7BallMinus = document.querySelector('.p7BallMinus')
let p8BallMinus = document.querySelector('.p8BallMinus')
let p9BallMinus = document.querySelector('.p9BallMinus')
let p10BallMinus = document.querySelector('.p10BallMinus')
let p11BallMinus = document.querySelector('.p11BallMinus')

// Player Ball- #End



// RunPlus Button #Start
let runC=0;
p1RunPlus.addEventListener('click',function(){
    runC++;
    p1run.innerHTML = runC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p1ballC++;
    p1Ball.innerHTML = p1ballC;
    
})

let p1Six = document.querySelector('.p1Six')
let p1Four = document.querySelector('.p1Four')
p1Six.addEventListener('click',function(){
    runC=runC+6;
    p1run.innerHTML = runC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p1ballC++;
    p1Ball.innerHTML = p1ballC;

})
p1Four.addEventListener('click',function(){
    runC=runC+4;
    p1run.innerHTML = runC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p1ballC++;
    p1Ball.innerHTML = p1ballC;

})
p1RunMinus.addEventListener('click',function(){
    runC--;
    p1run.innerHTML = runC;
    
})
let p2RunC = 0;
p2RunPlus.addEventListener('click',function(){
    p2RunC++;
    p2run.innerHTML = p2RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
})
let p2Six = document.querySelector('.p2Six')
let p2Four = document.querySelector('.p2Four')
p2Six.addEventListener('click',function(){
    p2RunC=p2RunC+6;
    p2run.innerHTML = p2RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;

})
p2Four.addEventListener('click',function(){
    p2RunC=p2RunC+4;
    p2run.innerHTML = p2RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;

})
p2RunMinus.addEventListener('click',function(){
    p2RunC--;
    p2run.innerHTML = p2RunC;
})
let p3RunC = 0;
p3RunPlus.addEventListener('click',function(){
    p3RunC++;
    p3run.innerHTML = p3RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
})

let p3Six = document.querySelector('.p3Six')
let p3Four = document.querySelector('.p3Four')
p3Six.addEventListener('click',function(){
    p3RunC=p3RunC+6;
    p3run.innerHTML = p3RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;

})
p3Four.addEventListener('click',function(){
    p3RunC=p3RunC+4;
    p3run.innerHTML = p3RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;

})

p3RunMinus.addEventListener('click',function(){
    p3RunC--;
    p3run.innerHTML = p3RunC;
    
})
let p4RunC = 0;
p4RunPlus.addEventListener('click',function(){
    p4RunC++;
    p4run.innerHTML = p4RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
})

let p4Six = document.querySelector('.p4Six')
let p4Four = document.querySelector('.p4Four')
p4Six.addEventListener('click',function(){
    p4RunC=p4RunC+6;
    p4run.innerHTML = p4RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;

})
p4Four.addEventListener('click',function(){
    p4RunC=p4RunC+4;
    p4run.innerHTML = p4RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;

})

p4RunMinus.addEventListener('click',function(){
    p4RunC--;
    p4run.innerHTML = p4RunC;
})
let p5RunC = 0;
p5RunPlus.addEventListener('click',function(){
    p5RunC++;
    p5run.innerHTML = p5RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
})

let p5Six = document.querySelector('.p5Six')
let p5Four = document.querySelector('.p5Four')
p5Six.addEventListener('click',function(){
    p5RunC=p5RunC+6;
    p5run.innerHTML = p5RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;

})
p5Four.addEventListener('click',function(){
    p5RunC=p5RunC+4;
    p5run.innerHTML = p5RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;

})

p5RunMinus.addEventListener('click',function(){
    p5RunC--;
    p5run.innerHTML = p5RunC;
})
let p6RunC = 0;
p6RunPlus.addEventListener('click',function(){
    p6RunC++;
    p6run.innerHTML = p6RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
})

let p6Six = document.querySelector('.p6Six')
let p6Four = document.querySelector('.p6Four')
p6Six.addEventListener('click',function(){
    p6RunC=p6RunC+6;
    p6run.innerHTML = p6RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;

})
p6Four.addEventListener('click',function(){
    p6RunC=p6RunC+4;
    p6run.innerHTML = p6RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;

})

p6RunMinus.addEventListener('click',function(){
    p6RunC--;
    p6run.innerHTML = p6RunC;
})
let p7RunC = 0;
p7RunPlus.addEventListener('click',function(){
    p7RunC++;
    p7run.innerHTML = p7RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
})

let p7Six = document.querySelector('.p7Six')
let p7Four = document.querySelector('.p7Four')
p7Six.addEventListener('click',function(){
    p7RunC=p7RunC+6;
    p7run.innerHTML = p7RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;

})
p7Four.addEventListener('click',function(){
    p7RunC=p7RunC+4;
    p7run.innerHTML = p7RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;

})

p7RunMinus.addEventListener('click',function(){
    p7RunC--;
    p7run.innerHTML = p7RunC;
})
let p8RunC = 0;
p8RunPlus.addEventListener('click',function(){
    p8RunC++;
    p8run.innerHTML = p8RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
})

let p8Six = document.querySelector('.p8Six')
let p8Four = document.querySelector('.p8Four')
p8Six.addEventListener('click',function(){
    p8RunC=p8RunC+6;
    p8run.innerHTML = p8RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;

})
p8Four.addEventListener('click',function(){
    p8RunC=p8RunC+4;
    p8run.innerHTML = p8RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;

})

p8RunMinus.addEventListener('click',function(){
    p8RunC--;
    p8run.innerHTML = p8RunC;
})
let p9RunC = 0;
p9RunPlus.addEventListener('click',function(){
    p9RunC++;
    p9run.innerHTML = p9RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
})

let p9Six = document.querySelector('.p9Six')
let p9Four = document.querySelector('.p9Four')
p9Six.addEventListener('click',function(){
    p9RunC=p9RunC+6;
    p9run.innerHTML = p9RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;

})
p9Four.addEventListener('click',function(){
    p9RunC=p9RunC+4;
    p9run.innerHTML = p9RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;

})

p9RunMinus.addEventListener('click',function(){
    p9RunC--;
    p9run.innerHTML = p9RunC;
})
let p10RunC = 0;
p10RunPlus.addEventListener('click',function(){
    p10RunC++;
    p10run.innerHTML = p10RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})

let p10Six = document.querySelector('.p10Six')
let p10Four = document.querySelector('.p10Four')
p10Six.addEventListener('click',function(){
    p10RunC=p10RunC+6;
    p10run.innerHTML = p10RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;

})
p10Four.addEventListener('click',function(){
    p10RunC=p10RunC+4;
    p10run.innerHTML = p10RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})

p10RunMinus.addEventListener('click',function(){
    p10RunC--;
    p10run.innerHTML = p10RunC;
})
let p11RunC = 0;
p11RunPlus.addEventListener('click',function(){
    p11RunC++;
    p11run.innerHTML = p11RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})

let p11Six = document.querySelector('.p11Six')
let p11Four = document.querySelector('.p11Four')
p11Six.addEventListener('click',function(){
    p11RunC=p11RunC+6;
    p11run.innerHTML = p11RunC;
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;

})
p11Four.addEventListener('click',function(){
    p11RunC=p11RunC+4;
    p11run.innerHTML = p11RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;

})

p11RunMinus.addEventListener('click',function(){
    p11RunC--;
    p11run.innerHTML = p11RunC;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})

// RunPlus Minus Button #End
// BallPlus Minus Button #start
let p1ballC=0;
p1BallPlus.addEventListener('click',function(){
    p1ballC++;
    p1Ball.innerHTML = p1ballC;
    console.log(p1ballC)
})
p1BallMinus.addEventListener('click',function(){
    p1ballC--;
    p1Ball.innerHTML = p1ballC;
})
let p2ballC=0;
p2BallPlus.addEventListener('click',function(){
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
})
p2BallMinus.addEventListener('click',function(){
    p2ballC--;
    p2Ball.innerHTML = p2ballC;
})
let p3ballC=0;
p3BallPlus.addEventListener('click',function(){
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
})
p3BallMinus.addEventListener('click',function(){
    p3ballC--;
    p3Ball.innerHTML = p3ballC;
})
let p4ballC=0;
p4BallPlus.addEventListener('click',function(){
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
})
p4BallMinus.addEventListener('click',function(){
    p4ballC--;
    p4Ball.innerHTML = p4ballC;
})
let p5ballC=0;
p5BallPlus.addEventListener('click',function(){
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
})
p5BallMinus.addEventListener('click',function(){
    p5ballC--;
    p5Ball.innerHTML = p5ballC;
})
let p6ballC=0;
p6BallPlus.addEventListener('click',function(){
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
})
p6BallMinus.addEventListener('click',function(){
    p6ballC--;
    p6Ball.innerHTML = p6ballC;
})
let p7ballC=0;
p7BallPlus.addEventListener('click',function(){
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
})
p7BallMinus.addEventListener('click',function(){
    p7ballC--;
    p7Ball.innerHTML = p7ballC;
})
let p8ballC=0;
p8BallPlus.addEventListener('click',function(){
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
})
p8BallMinus.addEventListener('click',function(){
    p8ballC--;
    p8Ball.innerHTML = p8ballC;
})
let p9ballC=0;
p9BallPlus.addEventListener('click',function(){
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
})
p9BallMinus.addEventListener('click',function(){
    p9ballC--;
    p9Ball.innerHTML = p9ballC;
})
let p10ballC=0;
p10BallPlus.addEventListener('click',function(){
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})
p10BallMinus.addEventListener('click',function(){
    p10ballC--;
    p10Ball.innerHTML = p10ballC;
})
let p11ballC=0;
p11BallPlus.addEventListener('click',function(){
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})
p11BallMinus.addEventListener('click',function(){
    p11ballC--;
    p11Ball.innerHTML = p11ballC;
})

// BallPlus Minus Button #End

// Batter namae portion #Start

// Batter namae portion #End


/*=========================================================
            #Batter part end
=========================================================*/