

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
        needRuns.innerHTML++
    }
})


totalRunPlus.addEventListener('click',function(){
    runCounter++;
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

totalRunDouble.addEventListener('click',function(){
    runCounter+=2;
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
totalRunFour.addEventListener('click',function(){
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
totalRunSix.addEventListener('click',function(){
    runCounter+=6;
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let wicketConter= 0;
TeamWicket.addEventListener('click',function(){
        if(wicketConter>=0 && wicketConter<11){

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
            #Extra part Start
=========================================================*/
let extraRuns = document.querySelector('.extraRuns')
let wdRun = document.querySelector('.wdRun')
let nbRun = document.querySelector('.nbRun')
let lbRun = document.querySelector('.lbRun')
let bRun = document.querySelector('.bRun')

// btns
let wide1 = document.querySelector('.wide1')
let wide2 = document.querySelector('.wide2')
let noBall = document.querySelector('.noBall')
let legBye = document.querySelector('.legBye')
let legByeFour = document.querySelector('.legByeFour')
let bye = document.querySelector('.bye')
let byeFour = document.querySelector('.byeFour')
let extraRunMinus = document.querySelector('.extraRunMinus')

// wide
let wdRunC= 0;
let extraRunsC =0;
wide1.addEventListener('click',function(){
    wdRunC++;
    extraRunsC++;
    runCounter++;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    wdRun.innerHTML = wdRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML--;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
wide2.addEventListener('click',function(){
    wdRunC+=5;
    extraRunsC+=5;
    runCounter+=5;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    wdRun.innerHTML = wdRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 5;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

// no ball
let noBallRunC= 0;
noBall.addEventListener('click',function(){
    noBallRunC++;
    extraRunsC++;
    runCounter++;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    nbRun.innerHTML = noBallRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML--;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let legByeRunC = 0;
legBye.addEventListener('click',function(){
    legByeRunC++;
    extraRunsC++;
    runCounter++;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    lbRun.innerHTML = legByeRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML--;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
legByeFour.addEventListener('click',function(){
    legByeRunC+=4;
    extraRunsC+=4;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    lbRun.innerHTML = legByeRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let bRunC = 0;
bye.addEventListener('click',function(){
    bRunC++
    extraRunsC++;
    runCounter++;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    bRun.innerHTML = bRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML--;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
byeFour.addEventListener('click',function(){
    bRunC+=4
    extraRunsC+=4;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    bRun.innerHTML = bRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
extraRunMinus.addEventListener('click',function(){
   if(runCounter>0 && extraRunsC>0){
    wdRunC--;
    wdRun.innerHTML = wdRunC;
    extraRunsC--;
    runCounter--;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML++;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
   }
})


let legByeMinus = document.querySelector('.legByeMinus')
legByeMinus.addEventListener('click',function(){
   if(runCounter>0 && extraRunsC>0 && legByeRunC>0){
    legByeRunC--;
    lbRun.innerHTML = legByeRunC;
    extraRunsC--;
    runCounter--;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML++;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
   }
})

let noBallMinus = document.querySelector('.noBallMinus')
noBallMinus.addEventListener('click',function(){
   if(runCounter>0 && extraRunsC>0 && noBallRunC>0){
    noBallRunC--;
    extraRunsC--;
    runCounter--;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    nbRun.innerHTML = noBallRunC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML++;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
   }
})
let byeRunMinus = document.querySelector('.byeRunMinus')
byeRunMinus.addEventListener('click',function(){
    if(runCounter>0 && extraRunsC>0 && bRunC>0){
       console.log('ami bye minus')
    bRunC--;
    bRun.innerHTML = bRunC;
    extraRunsC--;
    runCounter--;
    totalRun.innerHTML=runCounter;
    extraRuns.innerHTML = extraRunsC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML++;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
   }
})

/*=========================================================
            #Extra part end
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
        needRuns.innerHTML = targetInput.value
        NeedTeamName.innerHTML=scoreCard.innerHTML
        needToWin.style.display = 'block'
    }
    
})

/*=========================================================
            #target part end
=========================================================*/

/*=========================================================
            #Need to win part start
=========================================================*/
let needToWin = document.querySelector('.needToWin')
let NeedTeamName = document.querySelector('.NeedTeamName')
let needRuns = document.querySelector('.needRuns')



/*=========================================================
            #Need to win part End
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
    if(!(overLimit.value) && !overLimit.value>0){
        error3.innerHTML = 'Invalid'
    }
    else{
        overLimitPortion.style.display = 'none'
        scoreAndOver.style.display = 'block'
        batterOrBowler.style.display = 'flex'
        batsman.style.display = 'block'
        
    }
})

/*=========================================================
#Over part end
=========================================================*/

/*=========================================================
#bowlerLimit part Start
=========================================================*/
// let bowlerLimit =document.querySelector('.bowlerLimit')
// let bowlerLimitValue =document.querySelector('.bowlerLimitValue')
// let bowlerLimitBtn =document.querySelector('.bowlerLimitBtn')
// let err5 =document.querySelector('.err5')

// bowlerLimitBtn.addEventListener('click',function(){
//     if(!bowlerLimitValue.value){
//         err5.innerHTML = 'Empty field'
//     }
//     else if(bowlerLimitValue.value<1){
//         err5.innerHTML = 'Invalid limitation.'
//     }else{

//     }
// })

/*=========================================================
#bowlerLimit part end
=========================================================*/
/*=========================================================
#cursor part start
=========================================================*/
let batterHand = document.querySelector('.batterHand')
let bowlerHand = document.querySelector('.bowlerHand')

/*=========================================================
#cursor part end
=========================================================*/

/*=========================================================
#batterOrBowler part Start 
=========================================================*/
let batterOrBowler = document.querySelector('.batterOrBowler')
let BattersBtn = document.querySelector('.BattersBtn')
let bowlersBtn = document.querySelector('.bowlersBtn')


BattersBtn.addEventListener('click',function(){
    batsman.style.display = 'block'
    bwlerPart.style.display = 'none'
    bowlerHand.style.display = 'none'
    batterHand.style.display = 'inline'
    // bowlerLimit.style.display = 'none'
    
})
bowlersBtn.addEventListener('click',function(){
    batsman.style.display = 'none'
    bwlerPart.style.display = 'block'
    batterHand.style.display = 'none'
    bowlerHand.style.display = 'inline'
    // bowlerLimit.style.display = 'block'

})

/*=========================================================
            #batterOrBowler part end
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
    
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p1Four.addEventListener('click',function(){
    runC=runC+4;
    p1run.innerHTML = runC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p1ballC++;
    p1Ball.innerHTML = p1ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p1RunMinus.addEventListener('click',function(){
    if(runC>0){
        runC--;
        p1run.innerHTML = runC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
    
})
let p2RunC = 0;
p2RunPlus.addEventListener('click',function(){
    p2RunC++;
    p2run.innerHTML = p2RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p2Four.addEventListener('click',function(){
    p2RunC=p2RunC+4;
    p2run.innerHTML = p2RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p2RunMinus.addEventListener('click',function(){
    
    if(p2RunC>0){
        p2RunC--;
        p2run.innerHTML = p2RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p3RunC = 0;
p3RunPlus.addEventListener('click',function(){
    p3RunC++;
    p3run.innerHTML = p3RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p3Four.addEventListener('click',function(){
    p3RunC=p3RunC+4;
    p3run.innerHTML = p3RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p3RunMinus.addEventListener('click',function(){
    
    if(p3RunC>0){
        p3RunC--;
        p3run.innerHTML = p3RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
    
})
let p4RunC = 0;
p4RunPlus.addEventListener('click',function(){
    p4RunC++;
    p4run.innerHTML = p4RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p4Four.addEventListener('click',function(){
    p4RunC=p4RunC+4;
    p4run.innerHTML = p4RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p4RunMinus.addEventListener('click',function(){
    if(p4RunC>0){
        p4RunC--;
        p4run.innerHTML = p4RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p5RunC = 0;
p5RunPlus.addEventListener('click',function(){
    p5RunC++;
    p5run.innerHTML = p5RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p5Four.addEventListener('click',function(){
    p5RunC=p5RunC+4;
    p5run.innerHTML = p5RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p5RunMinus.addEventListener('click',function(){
    if(p5RunC>0){
        p5RunC--;
        p5run.innerHTML = p5RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p6RunC = 0;
p6RunPlus.addEventListener('click',function(){
    p6RunC++;
    p6run.innerHTML = p6RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p6Four.addEventListener('click',function(){
    p6RunC=p6RunC+4;
    p6run.innerHTML = p6RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p6RunMinus.addEventListener('click',function(){
    if(p6RunC>0){
        p6RunC--;
        p6run.innerHTML = p6RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p7RunC = 0;
p7RunPlus.addEventListener('click',function(){
    p7RunC++;
    p7run.innerHTML = p7RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p7Four.addEventListener('click',function(){
    p7RunC=p7RunC+4;
    p7run.innerHTML = p7RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p7RunMinus.addEventListener('click',function(){
    
    if(p7RunC>0){
        p7RunC--;
        p7run.innerHTML = p7RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p8RunC = 0;
p8RunPlus.addEventListener('click',function(){
    p8RunC++;
    p8run.innerHTML = p8RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p8Four.addEventListener('click',function(){
    p8RunC=p8RunC+4;
    p8run.innerHTML = p8RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p8RunMinus.addEventListener('click',function(){
    
    if(p8RunC>0){
        p8RunC--;
        p8run.innerHTML = p8RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p9RunC = 0;
p9RunPlus.addEventListener('click',function(){
    p9RunC++;
    p9run.innerHTML = p9RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p9Four.addEventListener('click',function(){
    p9RunC=p9RunC+4;
    p9run.innerHTML = p9RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p9RunMinus.addEventListener('click',function(){
    if(p9RunC>0){
        p9RunC--;
        p9run.innerHTML = p9RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p10RunC = 0;
p10RunPlus.addEventListener('click',function(){
    p10RunC++;
    p10run.innerHTML = p10RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p10Four.addEventListener('click',function(){
    p10RunC=p10RunC+4;
    p10run.innerHTML = p10RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

p10RunMinus.addEventListener('click',function(){
    
    if(p10RunC>0){
        p10RunC--;
        p10run.innerHTML = p10RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
let p11RunC = 0;
p11RunPlus.addEventListener('click',function(){
    p11RunC++;
    p11run.innerHTML = p11RunC;
    runCounter++;
    totalRun.innerHTML=runCounter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
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
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p11Four.addEventListener('click',function(){
    p11RunC=p11RunC+4;
    p11run.innerHTML = p11RunC;
    runCounter+=4;
    totalRun.innerHTML=runCounter;
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p11RunMinus.addEventListener('click',function(){
    if(p11RunC>0){
        p11RunC--;
        p11run.innerHTML = p11RunC;
        runCounter--;
        totalRun.innerHTML=runCounter;
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
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
    if(p1ballC>0){
        p1ballC--;
        p1Ball.innerHTML = p1ballC;
    }
    
})
let p2ballC=0;
p2BallPlus.addEventListener('click',function(){
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
})
p2BallMinus.addEventListener('click',function(){
    if(p2ballC>0){
        p2ballC--;
        p2Ball.innerHTML = p2ballC;
    }
})
let p3ballC=0;
p3BallPlus.addEventListener('click',function(){
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
})
p3BallMinus.addEventListener('click',function(){
    if(p3ballC>0){
        p3ballC--;
        p3Ball.innerHTML = p3ballC;
    }
})
let p4ballC=0;
p4BallPlus.addEventListener('click',function(){
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
})
p4BallMinus.addEventListener('click',function(){
    if(p4ballC>0){

        p4ballC--;
        p4Ball.innerHTML = p4ballC;
    }
})
let p5ballC=0;
p5BallPlus.addEventListener('click',function(){
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
})
p5BallMinus.addEventListener('click',function(){
    if(p5ballC>0){
        
        p5ballC--;
        p5Ball.innerHTML = p5ballC;
    }
})
let p6ballC=0;
p6BallPlus.addEventListener('click',function(){
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
})
p6BallMinus.addEventListener('click',function(){
    if(p6ballC>0){
        
        p6ballC--;
        p6Ball.innerHTML = p6ballC;
    }
})
let p7ballC=0;
p7BallPlus.addEventListener('click',function(){
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
})
p7BallMinus.addEventListener('click',function(){
    if(p7ballC>0){
        
        p7ballC--;
        p7Ball.innerHTML = p7ballC;
    }
})
let p8ballC=0;
p8BallPlus.addEventListener('click',function(){
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
})
p8BallMinus.addEventListener('click',function(){
    if(p8ballC>0){
        
        p8ballC--;
        p8Ball.innerHTML = p8ballC;
    }
})
let p9ballC=0;
p9BallPlus.addEventListener('click',function(){
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
})
p9BallMinus.addEventListener('click',function(){
    if(p9ballC>0){
        
        p9ballC--;
        p9Ball.innerHTML = p9ballC;
    }
})
let p10ballC=0;
p10BallPlus.addEventListener('click',function(){
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})
p10BallMinus.addEventListener('click',function(){
    if(p10ballC>0){
        
        p10ballC--;
        p10Ball.innerHTML = p10ballC;
    }
})
let p11ballC=0;
p11BallPlus.addEventListener('click',function(){
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})
p11BallMinus.addEventListener('click',function(){
    if(p11ballC>0){
        
        p11ballC--;
        p11Ball.innerHTML = p11ballC;
    }
})

// BallPlus Minus Button #End

// Batter namae portion #Start

// Batter namae portion #End


/*=========================================================
            #Batter part end
=========================================================*/

/*=========================================================
            #Bwler part Start
=========================================================*/
let bwlerPart =document.querySelector('.bwler-part')
let blwer =document.querySelector('.blwer')
let blwer1 =document.querySelector('.blwer1')
let blwer2 =document.querySelector('.blwer2')
let blwer3 =document.querySelector('.blwer3')
let blwer4 =document.querySelector('.blwer4')
let blwer5 =document.querySelector('.blwer5')
let blwer6 =document.querySelector('.blwer6')
let blwer7 =document.querySelector('.blwer7')
let blwer8 =document.querySelector('.blwer8')

let bltn1 =document.querySelector('.bltn1')
let bltn2 =document.querySelector('.bltn2')
let bltn3 =document.querySelector('.bltn3')
let bltn4 =document.querySelector('.bltn4')
let bltn5 =document.querySelector('.bltn5')
let bltn6 =document.querySelector('.bltn6')
let bltn7 =document.querySelector('.bltn7')
let bltn8 =document.querySelector('.bltn8')
let blName1 =document.querySelector('.blName1')
let blName2 =document.querySelector('.blName2')
let blName3 =document.querySelector('.blName3')
let blName4 =document.querySelector('.blName4')
let blName5 =document.querySelector('.blName5')
let blName6 =document.querySelector('.blName6')
let blName7 =document.querySelector('.blName7')
let blName8 =document.querySelector('.blName8')
let err4 =document.querySelector('.err4')


// Bowler1
let bl1 = document.querySelector('.bl1')
let bl1over = document.querySelector('.bl1over')
let bl1runs = document.querySelector('.bl1runs')
let bl1Wicket = document.querySelector('.bl1Wicket')
let bl1RunPlus = document.querySelector('.bl1RunPlus')
let bl1Four = document.querySelector('.bl1Four')
let bl1Six = document.querySelector('.bl1Six')
let bl1RunMinus = document.querySelector('.bl1RunMinus')
let bl1OverMinus = document.querySelector('.bl1OverMinus')
let bl1OverPlus = document.querySelector('.bl1OverPlus')
let bl1Wicket2 = document.querySelector('.bl1Wicket2')

bltn1.addEventListener('click',function(){
    if(!blwer1.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer1.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl1.innerHTML= blwer1.value; 
        blName1.style.display= 'block' 
        err4.innerHTML= ''
        blwer1.style.display= 'none' 
        bltn1.style.display = 'none'
        
        blwer2.style.display = 'inline'
        bltn2.style.display = 'inline'
    }
})

// b1 in de

let bl1OverCounter= 0;
bl1OverPlus.addEventListener('click',function(){
   if(bl1OverCounter>=0){
    bl1OverCounter++;
    bl1over.innerHTML= bl1OverCounter;
    overCounter++;
    totalOvar.innerHTML = overCounter;
   }
})
bl1OverMinus.addEventListener('click',function(){
   if(bl1OverCounter>0){
    bl1OverCounter--;
    bl1over.innerHTML= bl1OverCounter;
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl1RunC = 0;
bl1RunPlus.addEventListener('click',function(){
   if(bl1RunC>=0){
    bl1RunC++;
    bl1runs.innerHTML= bl1RunC;
   }
})
bl1RunMinus.addEventListener('click',function(){
   if(bl1RunC>0){
    bl1RunC--;
    bl1runs.innerHTML= bl1RunC;
   }
})
bl1Six.addEventListener('click',function(){
    if(bl1RunC>=0){
     bl1RunC+=6;
     bl1runs.innerHTML= bl1RunC;
    }
 })
bl1Four.addEventListener('click',function(){
    if(bl1RunC>=0){
     bl1RunC+=4;
     bl1runs.innerHTML= bl1RunC;
    }
 })
 let bl1WicketC = 0;
bl1Wicket2.addEventListener('click',function(){
    if(bl1RunC>=0){
        bl1WicketC++;
        bl1Wicket.innerHTML= bl1WicketC;
    }
 })


// Bowler2
let bl2 = document.querySelector('.bl2')
let bl2over = document.querySelector('.bl2over')
let bl2runs = document.querySelector('.bl2runs')
let bl2Wicket = document.querySelector('.bl2Wicket')
let bl2RunPlus = document.querySelector('.bl2RunPlus')
let bl2Four = document.querySelector('.bl2Four')
let bl2Six = document.querySelector('.bl2Six')
let bl2RunMinus = document.querySelector('.bl2RunMinus')
let bl2OverMinus = document.querySelector('.bl2OverMinus')
let bl2OverPlus = document.querySelector('.bl2OverPlus')
let bl2Wicket2 = document.querySelector('.bl2Wicket2')

bltn2.addEventListener('click',function(){
    if(!blwer2.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer2.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl2.innerHTML= blwer2.value; 
        blName2.style.display= 'block' 
        err4.innerHTML= ''
        blwer2.style.display= 'none' 
        bltn2.style.display = 'none'
        
        blwer3.style.display = 'inline'
        bltn3.style.display = 'inline'
    }
})

// b2 in de

let bl2OverCounter= 0;
bl2OverPlus.addEventListener('click',function(){
   if(bl2OverCounter>=0){
    bl2OverCounter++;
    bl2over.innerHTML= bl2OverCounter;
    // don't touc2
    overCounter++;
    totalOvar.innerHTML = overCounter;
   }
})
bl2OverMinus.addEventListener('click',function(){
   if(bl2OverCounter>0){
    bl2OverCounter--;
    bl2over.innerHTML= bl2OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl2RunC = 0;
bl2RunPlus.addEventListener('click',function(){
   if(bl2RunC>=0){
    bl2RunC++;
    bl2runs.innerHTML= bl2RunC;
   }
})
bl2RunMinus.addEventListener('click',function(){
   if(bl2RunC>0){
    bl2RunC--;
    bl2runs.innerHTML= bl2RunC;
   }
})
bl2Six.addEventListener('click',function(){
    if(bl2RunC>=0){
     bl2RunC+=6;
     bl2runs.innerHTML= bl2RunC;
    }
 })
bl2Four.addEventListener('click',function(){
    if(bl2RunC>=0){
     bl2RunC+=4;
     bl2runs.innerHTML= bl2RunC;
    }
 })

 let bl2WicketC = 0;

bl2Wicket2.addEventListener('click',function(){
    if(bl2WicketC>=0){
        bl2WicketC++;
        bl2Wicket.innerHTML= bl2WicketC;
    }
 })



// Bowler3
let bl3 = document.querySelector('.bl3')
let bl3over = document.querySelector('.bl3over')
let bl3runs = document.querySelector('.bl3runs')
let bl3Wicket = document.querySelector('.bl3Wicket')
let bl3RunPlus = document.querySelector('.bl3RunPlus')
let bl3Four = document.querySelector('.bl3Four')
let bl3Six = document.querySelector('.bl3Six')
let bl3RunMinus = document.querySelector('.bl3RunMinus')
let bl3OverMinus = document.querySelector('.bl3OverMinus')
let bl3OverPlus = document.querySelector('.bl3OverPlus')
let bl3Wicket2 = document.querySelector('.bl3Wicket2')

bltn3.addEventListener('click',function(){
    if(!blwer3.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer3.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl3.innerHTML= blwer3.value; 
        blName3.style.display= 'block' 
        err4.innerHTML= ''
        blwer3.style.display= 'none' 
        bltn3.style.display = 'none'
        
        blwer4.style.display = 'inline'
        bltn4.style.display = 'inline'
    }
})

// b3 in de

let bl3OverCounter= 0;
bl3OverPlus.addEventListener('click',function(){
   if(bl3OverCounter>=0){
    bl3OverCounter++;
    bl3over.innerHTML= bl3OverCounter;
    // don't touc2
    overCounter++;
    totalOvar.innerHTML = overCounter;
   }
})
bl3OverMinus.addEventListener('click',function(){
   if(bl3OverCounter>0){
    bl3OverCounter--;
    bl3over.innerHTML= bl3OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl3RunC = 0;
bl3RunPlus.addEventListener('click',function(){
   if(bl3RunC>=0){
    bl3RunC++;
    bl3runs.innerHTML= bl3RunC
   }
})
bl3RunMinus.addEventListener('click',function(){
   if(bl3RunC>0){
    bl3RunC--;
    bl3runs.innerHTML= bl3RunC
   }
})
bl3Six.addEventListener('click',function(){
    if(bl3RunC>=0){
     bl3RunC+=6;
     bl3runs.innerHTML= bl3RunC;
    }
 })
bl3Four.addEventListener('click',function(){
    if(bl3RunC>=0){
     bl3RunC+=4;
     bl3runs.innerHTML= bl3RunC;
    }
 })
 
 let bl3WicketC = 0;

bl3Wicket2.addEventListener('click',function(){
    if(bl3WicketC>=0){
        bl3WicketC++;
        bl3Wicket.innerHTML= bl3WicketC;
    }
 })

// Bowler4
let bl4 = document.querySelector('.bl4')
let bl4over = document.querySelector('.bl4over')
let bl4runs = document.querySelector('.bl4runs')
let bl4Wicket = document.querySelector('.bl4Wicket')
let bl4RunPlus = document.querySelector('.bl4RunPlus')
let bl4Four = document.querySelector('.bl4Four')
let bl4Six = document.querySelector('.bl4Six')
let bl4RunMinus = document.querySelector('.bl4RunMinus')
let bl4OverMinus = document.querySelector('.bl4OverMinus')
let bl4OverPlus = document.querySelector('.bl4OverPlus')
let bl4Wicket2 = document.querySelector('.bl4Wicket2')

bltn4.addEventListener('click',function(){
    if(!blwer4.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer4.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl4.innerHTML= blwer3.value; 
        blName4.style.display= 'block' 
        err4.innerHTML= ''
        blwer4.style.display= 'none' 
        bltn4.style.display = 'none'
        
        blwer5.style.display = 'inline'
        bltn5.style.display = 'inline'
    }
})

// b4 in de

let bl4OverCounter= 0;
bl4OverPlus.addEventListener('click',function(){
   if(bl4OverCounter>=0){
    bl4OverCounter++;
    bl4over.innerHTML= bl4OverCounter;
    // don't touc2
    overCounter++;
    totalOvar.innerHTML = overCounter;
   }
})
bl4OverMinus.addEventListener('click',function(){
   if(bl4OverCounter>0){
    bl4OverCounter--;
    bl4over.innerHTML= bl4OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl4RunC = 0;
bl4RunPlus.addEventListener('click',function(){
   if(bl4RunC>=0){
    bl4RunC++;
    bl4runs.innerHTML= bl4RunC;
   }
})
bl4RunMinus.addEventListener('click',function(){
   if(bl4RunC>0){
    bl4RunC--;
    bl4runs.innerHTML= bl4RunC;
   }
})
bl4Six.addEventListener('click',function(){
    if(bl4RunC>=0){
     bl4RunC+=6;
     bl4runs.innerHTML= bl4RunC;
    }
 })
bl4Four.addEventListener('click',function(){
    if(bl4RunC>=0){
     bl4RunC+=4;
     bl4runs.innerHTML= bl4RunC;
    }
 })
 
 let bl4WicketC = 0;

bl4Wicket2.addEventListener('click',function(){
    if(bl4WicketC>=0){
        bl4WicketC++;
        bl4Wicket.innerHTML= bl4WicketC;
    }
 })

// Bowler5
let bl5 = document.querySelector('.bl5')
let bl5over = document.querySelector('.bl5over')
let bl5runs = document.querySelector('.bl5runs')
let bl5Wicket = document.querySelector('.bl5Wicket')
let bl5RunPlus = document.querySelector('.bl5RunPlus')
let bl5Four = document.querySelector('.bl5Four')
let bl5Six = document.querySelector('.bl5Six')
let bl5RunMinus = document.querySelector('.bl5RunMinus')
let bl5OverMinus = document.querySelector('.bl5OverMinus')
let bl5OverPlus = document.querySelector('.bl5OverPlus')
let bl5Wicket2 = document.querySelector('.bl5Wicket2')

bltn5.addEventListener('click',function(){
    if(!blwer5.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer5.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl5.innerHTML= blwer5.value; 
        blName5.style.display= 'block' 
        err4.innerHTML= ''
        blwer5.style.display= 'none' 
        bltn5.style.display = 'none'
        
        blwer6.style.display = 'inline'
        bltn6.style.display = 'inline'
    }
})

// b5 in de

let bl5OverCounter= 0;
bl5OverPlus.addEventListener('click',function(){
    if(bl5OverCounter>=0){
     bl5OverCounter++;
     bl5over.innerHTML= bl5OverCounter;
     // don't touc2
     overCounter++;
     totalOvar.innerHTML = overCounter;
    }
 })
bl5OverMinus.addEventListener('click',function(){
   if(bl5OverCounter>0){
    bl5OverCounter--;
    bl5over.innerHTML= bl5OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl5RunC = 0;
bl5RunPlus.addEventListener('click',function(){
   if(bl5RunC>=0){
    bl5RunC++;
    bl5runs.innerHTML= bl5RunC;
   }
})
bl5RunMinus.addEventListener('click',function(){
   if(bl5RunC>0){
    bl5RunC--;
    bl5runs.innerHTML= bl5RunC;
   }
})
bl5Six.addEventListener('click',function(){
    if(bl5RunC>=0){
     bl5RunC+=6;
     bl5runs.innerHTML= bl5RunC;
    }
 })
bl5Four.addEventListener('click',function(){
    if(bl5RunC>=0){
     bl5RunC+=4;
     bl5runs.innerHTML= bl5RunC;
    }
 })
 
 let bl5WicketC = 0;

bl5Wicket2.addEventListener('click',function(){
    if(bl5WicketC>=0){
        bl5WicketC++;
        bl5Wicket.innerHTML= bl5WicketC;
    }
 })

// Bowler6
let bl6 = document.querySelector('.bl6')
let bl6over = document.querySelector('.bl6over')
let bl6runs = document.querySelector('.bl6runs')
let bl6Wicket = document.querySelector('.bl6Wicket')
let bl6RunPlus = document.querySelector('.bl6RunPlus')
let bl6Four = document.querySelector('.bl6Four')
let bl6Six = document.querySelector('.bl6Six')
let bl6RunMinus = document.querySelector('.bl6RunMinus')
let bl6OverMinus = document.querySelector('.bl6OverMinus')
let bl6OverPlus = document.querySelector('.bl6OverPlus')
let bl6Wicket2 = document.querySelector('.bl6Wicket2')

bltn6.addEventListener('click',function(){
    if(!blwer6.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer6.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl6.innerHTML= blwer6.value; 
        blName6.style.display= 'block' 
        err4.innerHTML= ''
        blwer6.style.display= 'none' 
        bltn6.style.display = 'none'
        
        blwer7.style.display = 'inline'
        bltn7.style.display = 'inline'
    }
})

// b6 in de

let bl6OverCounter= 0;
bl6OverPlus.addEventListener('click',function(){
    if(bl6OverCounter>=0){
     bl6OverCounter++;
     bl6over.innerHTML= bl6OverCounter;
     // don't touc2
     overCounter++;
     totalOvar.innerHTML = overCounter;
    }
 })
bl6OverMinus.addEventListener('click',function(){
   if(bl6OverCounter>0){
    bl6OverCounter--;
    bl6over.innerHTML= bl6OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl6RunC = 0;
bl6RunPlus.addEventListener('click',function(){
   if(bl6RunC>=0){
    bl6RunC++;
    bl6runs.innerHTML= bl6RunC;
   }
})
bl6RunMinus.addEventListener('click',function(){
   if(bl6RunC>0){
    bl6RunC--;
    bl6runs.innerHTML= bl6RunC
   }
})
bl6Six.addEventListener('click',function(){
    if(bl6RunC>=0){
     bl6RunC+=6;
     bl6runs.innerHTML= bl6RunC;
    }
 })
bl6Four.addEventListener('click',function(){
    if(bl6RunC>=0){
     bl6RunC+=4;
     bl6runs.innerHTML= bl6RunC;
    }
 })
 
 let bl6WicketC = 0;

bl6Wicket2.addEventListener('click',function(){
    if(bl6WicketC>=0){
        bl6WicketC++;
        bl6Wicket.innerHTML= bl6WicketC;
    }
 })

// Bowler7
let bl7 = document.querySelector('.bl7')
let bl7over = document.querySelector('.bl7over')
let bl7runs = document.querySelector('.bl7runs')
let bl7Wicket = document.querySelector('.bl7Wicket')
let bl7RunPlus = document.querySelector('.bl7RunPlus')
let bl7Four = document.querySelector('.bl7Four')
let bl7Six = document.querySelector('.bl7Six')
let bl7RunMinus = document.querySelector('.bl7RunMinus')
let bl7OverMinus = document.querySelector('.bl7OverMinus')
let bl7OverPlus = document.querySelector('.bl7OverPlus')
let bl7Wicket2 = document.querySelector('.bl7Wicket2')

bltn7.addEventListener('click',function(){
    if(!blwer7.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer7.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl7.innerHTML= blwer7.value; 
        blName7.style.display= 'block' 
        err4.innerHTML= ''
        blwer7.style.display= 'none' 
        bltn7.style.display = 'none'
        
        blwer8.style.display = 'inline'
        bltn8.style.display = 'inline'
    }
})

// b8 in de

let bl7OverCounter= 0;
bl7OverPlus.addEventListener('click',function(){
    if(bl7OverCounter>=0){
     bl7OverCounter++;
     bl7over.innerHTML= bl7OverCounter;
     // don't touc2
     overCounter++;
     totalOvar.innerHTML = overCounter;
    }
 })
bl7OverMinus.addEventListener('click',function(){
   if(bl7OverCounter>0){
    bl7OverCounter--;
    bl7over.innerHTML= bl7OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl7RunC = 0;
bl7RunPlus.addEventListener('click',function(){
   if(bl7RunC>=0){
    bl7RunC++;
    bl7runs.innerHTML= bl7RunC;
   }
})
bl7RunMinus.addEventListener('click',function(){
   if(bl7RunC>0){
    bl7RunC--;
    bl7runs.innerHTML= bl7RunC
   }
})
bl7Six.addEventListener('click',function(){
    if(bl7RunC>=0){
     bl7RunC+=6;
     bl7runs.innerHTML= bl7RunC;
    }
 })
bl7Four.addEventListener('click',function(){
    if(bl7RunC>=0){
     bl7RunC+=4;
     bl7runs.innerHTML= bl7RunC;
    }
 })
 
 let bl7WicketC = 0;

bl7Wicket2.addEventListener('click',function(){
    if(bl7WicketC>=0){
        bl7WicketC++;
        bl7Wicket.innerHTML= bl7WicketC;
    }
 })


// Bowler8
let bl8 = document.querySelector('.bl8')
let bl8over = document.querySelector('.bl8over')
let bl8runs = document.querySelector('.bl8runs')
let bl8Wicket = document.querySelector('.bl8Wicket')
let bl8RunPlus = document.querySelector('.bl8RunPlus')
let bl8Four = document.querySelector('.bl8Four')
let bl8Six = document.querySelector('.bl8Six')
let bl8RunMinus = document.querySelector('.bl8RunMinus')
let bl8OverMinus = document.querySelector('.bl8OverMinus')
let bl8OverPlus = document.querySelector('.bl8OverPlus')
let bl8Wicket2 = document.querySelector('.bl8Wicket2')

bltn8.addEventListener('click',function(){
    if(!blwer8.value){
        err4.innerHTML='Empty field'
    }
    else if(blwer8.value.length<3){
        err4.innerHTML='Bowler name atleat 3 charactar long.'
    }else{
        bl8.innerHTML= blwer8.value; 
        blName8.style.display= 'block' 
        err4.innerHTML= ''
        blwer8.style.display= 'none' 
        bltn8.style.display = 'none'
    }
})

// b8 in de

let bl8OverCounter= 0;
bl8OverPlus.addEventListener('click',function(){
    if(bl8OverCounter>=0){
     bl8OverCounter++;
     bl8over.innerHTML= bl8OverCounter;
     // don't touc2
     overCounter++;
     totalOvar.innerHTML = overCounter;
    }
 })
bl8OverMinus.addEventListener('click',function(){
   if(bl8OverCounter>0){
    bl8OverCounter--;
    bl8over.innerHTML= bl8OverCounter;
    // dont touch
    overCounter--;
    totalOvar.innerHTML = overCounter;
   }
})

let bl8RunC = 0;
bl8RunPlus.addEventListener('click',function(){
   if(bl8RunC>=0){
    bl8RunC++;
    bl8runs.innerHTML= bl8RunC;
   }
})
bl8RunMinus.addEventListener('click',function(){
   if(bl8RunC>0){
    bl8RunC--;
    bl8runs.innerHTML= bl8RunC
   }
})
bl8Six.addEventListener('click',function(){
    if(bl8RunC>=0){
     bl8RunC+=6;
     bl8runs.innerHTML= bl8RunC;
    }
 })
bl8Four.addEventListener('click',function(){
    if(bl8RunC>=0){
     bl8RunC+=4;
     bl8runs.innerHTML= bl8RunC;
    }
 })
 
 let bl8WicketC = 0;

bl8Wicket2.addEventListener('click',function(){
    if(bl8WicketC>=0){
        bl8WicketC++;
        bl8Wicket.innerHTML= bl8WicketC;
    }
 })
// Bowler9
// Bowler

/*=========================================================
            #Bwler part end
=========================================================*/