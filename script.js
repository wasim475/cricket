function getId(elementId){
    let element = document.getElementById(elementId)
    return element;
}

function getInnerHtml(elementId){
    let element = document.getElementById(elementId)
    let text = element.innerHTML;
    return text;
}

function hideElement(elementId){
    let element = document.getElementById(elementId)
    let hide=  element.classList.add('hidden')
    return hide;
}
function ShowElement(elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('hidden')
}




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
        if (!sessionStorage.getItem('team1Input')) {
            sessionStorage.setItem('team1Input', team1Input.value);
          
          }
          
        let team1dis = sessionStorage.getItem('team1Input');
        
      
        
            team1.innerHTML = team1dis
            tossTeam1.innerHTML = team1dis

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

        if (!sessionStorage.getItem('team2Input')) {
            sessionStorage.setItem('team2Input', team2Input.value);
            
          }
          
        let team2dis = sessionStorage.getItem('team2Input');
        team2.innerHTML = team2dis
        tossTeam2.innerHTML = team2dis
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
    if (!sessionStorage.getItem('tossTeam1')) {
        sessionStorage.setItem('tossTeam1', tossTeam1.innerHTML);
        
      }
      let tt1 = sessionStorage.getItem('tossTeam1')
    battingFirstOrTarget.style.display = 'inline-block'
    toss.style.display = 'none'
    scoreCard.innerHTML = tt1;
})
tossTeam2.addEventListener('click',function(){
    if (!sessionStorage.getItem('tossTeam2')) {
        sessionStorage.setItem('tossTeam2', tossTeam2.innerHTML);
        
      }
      let tt2 = sessionStorage.getItem('tossTeam2')
    battingFirstOrTarget.style.display = 'inline-block'
    toss.style.display = 'none'
    scoreCard.innerHTML = tt2
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
            #Last ten part start
=========================================================*/
let lastTen = document.getElementById('lastTen')
/*=========================================================
            #Last ten part end
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


if (!sessionStorage.getItem('initTotalrun')) {
    sessionStorage.setItem('initTotalrun', '0');
  }
  
  let runCounter = Number(sessionStorage.getItem('initTotalrun'));
totalRunMinus.addEventListener('click',function(){
    if(runCounter>=1){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        }
        if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        needRuns.innerHTML++
    }
})

totalRun.innerHTML=runCounter;
totalRunPlus.addEventListener('click',function(){
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

totalRunDouble.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
totalRunFour.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
totalRunSix.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    wicketConter++;
    if(wicketConter>=0 && wicketConter<11){
        
        totalWicket.innerHTML = wicketConter;
        let sp = document.createElement('span')
        sp.innerHTML = 'w '
        if(lastTen.firstChild){
            lastTen.insertBefore(sp,lastTen.firstChild)
        }else{
            
            lastTen.appendChild(sp)
        }

        if(lastTen.firstChild){
            lastTen.removeChild(lastTen.firstChild)
        }
        
    }
        else{
            
            runIncrmenterDeincrementer.style.display= 'none'
            overIncrementDecrement.style.display = 'none'
            undo1.style.display = 'block'
        }
})

undo1.addEventListener('click',function(){
    runIncrmenterDeincrementer.style.display= 'block'
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
let closeBtn = document.querySelector('.closeBtn')
let extraIcon = document.querySelector('.extraIcon')
let extraBtn = document.querySelector('.extraBtn')

extraBtn.addEventListener('click',function(){
    extraIcon.style.display ='none';
})
closeBtn.addEventListener('click',function(){
    extraIcon.style.display ='inline';

})

// wide
let wdRunC= 0;
let extraRunsC =0;
wide1.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    }if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = 'wd '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    wdRunC++;
    extraRunsC++;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=5;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=5;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=5;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=5;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=5;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=5;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=5;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=5;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = 'wd5 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    wdRunC+=5;
    extraRunsC+=5;
    runCounter+=5;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = 'nb '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    noBallRunC++;
    extraRunsC++;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1lb '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    legByeRunC++;
    extraRunsC++;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '4lb '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    legByeRunC+=4;
    extraRunsC+=4;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '1b '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    bRunC++
    extraRunsC++;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '4b '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    bRunC+=4
    extraRunsC+=4;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC--;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC--;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC--;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC--;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC--;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC--;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC--;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC--;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    wdRunC--;
    wdRun.innerHTML = wdRunC;
    extraRunsC--;
    runCounter--;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC--;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC--;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC--;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC--;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC--;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC--;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC--;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC--;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    legByeRunC--;
    lbRun.innerHTML = legByeRunC;
    extraRunsC--;
    runCounter--;
    sessionStorage.setItem('initTotalrun', runCounter);
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
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC--;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC--;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC--;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC--;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC--;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC--;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC--;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC--;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    noBallRunC--;
    extraRunsC--;
    runCounter--;
    sessionStorage.setItem('initTotalrun', runCounter);
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
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        }
        if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
    bRunC--;
    bRun.innerHTML = bRunC;
    extraRunsC--;
    runCounter--;
    sessionStorage.setItem('initTotalrun', runCounter);
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
        if (!sessionStorage.getItem('Targetv')) {
            sessionStorage.setItem('Targetv', targetInput.value);
          }
        let target2 = Number(sessionStorage.getItem('Targetv'));
        
          

        targetRuns.innerHTML =target2;
        
        error2.innerHTML = ''
        target.style.display = 'none'
        error2.innerHTML= ''
        overLimitPortion.style.display = 'block'
        needRuns.innerHTML = target2;
        NeedTeamName.innerHTML=scoreCard.innerHTML
       
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


if (!sessionStorage.getItem('initOver')) {
    sessionStorage.setItem('initOver', '0');
  }
  
  let overCounter = Number(sessionStorage.getItem('initOver'));

totalOverMinus.addEventListener('click',function(){
    if(overCounter>0){
        overCounter--;
        sessionStorage.setItem('initOver', overCounter);
        totalOvar.innerHTML = overCounter;
    }
})

totalOverPlus.addEventListener('click',function(){
    if(overCounter>=0 && overCounter < Number(overLL.innerHTML)){
        overCounter++;
        sessionStorage.setItem('initOver', overCounter);
        totalOvar.innerHTML = overCounter;
        let sp = document.createElement('span')
        sp.innerHTML = '| '
        sp.style.fontWeight = 'bolder'
        sp.style.fontSize = '16px'
        sp.style.color = 'red'
        if(lastTen.firstChild){
            lastTen.insertBefore(sp,lastTen.firstChild)
        }else{
            
            lastTen.appendChild(sp)
        }

        
     
    }else{
      
            overIncrementDecrement.style.display = 'none'
            runIncrmenterDeincrementer.style.display= 'none'
            totalOvar.innerHTML= overCounter;
            undo1.style.display = 'block'
           
        
    }
})
totalOvar.innerHTML = overCounter;
let overLL = document.querySelector('.overLL')


overLimitBtn.addEventListener('click',function(){
    if(!(overLimit.value)){
        error3.innerHTML = 'Invalid'
    }
    else{
        if (!sessionStorage.getItem('overLimit1')) {
            sessionStorage.setItem('overLimit1', overLimit.value);
          
          }
          
        let overLimitt = Number(sessionStorage.getItem('overLimit1'))
        overLL.innerText = overLimitt;
        console.log(overLL)

        // if (sessionStorage.getItem('initp1')) {
        //     player1.style.display= 'block'
        //     let b1dis = sessionStorage.getItem('initp1');
        //     p1.innerHTML = b1dis;
        //     btn1.style.display = 'none'
        //     b1.style.display = 'none';
        //     btn2.style.display = 'inline-block'
        //     b2.style.display = 'inline-block';
        //   }

        // if (sessionStorage.getItem('initp2')) {
        //     player2.style.display= 'block'
        //     let b2dis = sessionStorage.getItem('initp2');
        //     p2.innerHTML = b2dis;
        //     btn2.style.display = 'none'
        //     b2.style.display = 'none';
        //     btn3.style.display = 'inline-block'
        //     b3.style.display = 'inline-block';
        //   }

        // if (sessionStorage.getItem('initp3')) {
        //     player3.style.display= 'block'
        //     let b3dis = sessionStorage.getItem('initp3');
        //     p3.innerHTML = b3dis;
        //     btn3.style.display = 'none'
        //     b3.style.display = 'none';
        //     btn4.style.display = 'inline-block'
        //     b4.style.display = 'inline-block';
        // }
        // if (sessionStorage.getItem('initp4')) {
        //     player4.style.display= 'block'
        //     let b4dis = sessionStorage.getItem('initp4');
        //     p4.innerHTML = b4dis;
        //     btn4.style.display = 'none'
        //     b4.style.display = 'none';
        //     btn5.style.display = 'inline-block'
        //     b5.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp5')) {
        //     player5.style.display= 'block'
        //     let b5dis = sessionStorage.getItem('initp5');
        //     p5.innerHTML = b5dis;
        //     btn5.style.display = 'none'
        //     b5.style.display = 'none';
        //     btn6.style.display = 'inline-block'
        //     b6.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp6')) {
        //     player6.style.display= 'block'
        //     let b6dis = sessionStorage.getItem('initp6');
        //     p6.innerHTML = b6dis;
        //     btn6.style.display = 'none'
        //     b6.style.display = 'none';
        //     btn7.style.display = 'inline-block'
        //     b7.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp7')) {
        //     player7.style.display= 'block'
        //     let b7dis = sessionStorage.getItem('initp7');
        //     p7.innerHTML = b7dis;
        //     btn7.style.display = 'none'
        //     b7.style.display = 'none';
        //     btn8.style.display = 'inline-block'
        //     b8.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp8')) {
        //     player8.style.display= 'block'
        //     let b8dis = sessionStorage.getItem('initp8');
        //     p8.innerHTML = b8dis;
        //     btn8.style.display = 'none'
        //     b8.style.display = 'none';
        //     btn9.style.display = 'inline-block'
        //     b9.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp9')) {
        //     player9.style.display= 'block'
        //     let b9dis = sessionStorage.getItem('initp9');
        //     p9.innerHTML = b9dis;
        //     btn9.style.display = 'none'
        //     b9.style.display = 'none';
        //     btn10.style.display = 'inline-block'
        //     b10.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp10')) {
        //     player10.style.display= 'block'
        //     let b10dis = sessionStorage.getItem('initp10');
        //     p10.innerHTML = b10dis;
        //     btn10.style.display = 'none'
        //     b10.style.display = 'none';
        //     btn11.style.display = 'inline-block'
        //     b11.style.display = 'inline-block';
        //   }
        //   if (sessionStorage.getItem('initp11')) {
        //     player11.style.display= 'block'
        //     let b11dis = sessionStorage.getItem('initp11');
        //     p11.innerHTML = b11dis;
        //     btn11.style.display = 'none'
        //     b11.style.display = 'none';
            
        //   }

        if(Number(targetRuns.innerHTML)>0){
            targetName.style.display = 'block'
            needToWin.style.display = 'block'
        }
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
let bt1w = getId('bt1Wicker')
let bt2w = getId('bt2Wicker')
let bt3w = getId('bt3Wicker')
let bt4w = getId('bt4Wicker')
let bt5w = getId('bt5Wicker')
let bt6w = getId('bt6Wicker')
let bt7w = getId('bt7Wicker')
let bt8w = getId('bt8Wicker')
let bt9w = getId('bt9Wicker')
let bt10w = getId('bt10Wicker')
let bt11w = getId('bt11Wicker')

function runOut(elementId){
    let element = document.getElementById(elementId)
    element.innerHTML = '(run out)'
}

// Out portion #tart
p1Out.addEventListener('click',function(){
    
    p1RunPlus.style.display = 'none'
    p1BallPlus.style.display = 'none'
    p1RunMinus.style.display = 'none'
    p1BallMinus.style.display = 'none'
    p1Out.style.display = 'none'
    p1Six.style.display = 'none'
    p1Four.style.display = 'none'
    p1two.style.display = 'none'
    bt1undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p1ballC++;
    p1DotsC++;
    p1Ball.innerHTML = p1ballC;
    p1Dots.innerHTML = p1DotsC;
    console.log(p1Sr)
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);


    ShowElement('bwp1')
    // hideElement('bwtn1')
    ShowElement('bwtn1')
    

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bt1w.innerHTML = blwer1.value;
        bl1WicketC++
        bl1Wicket.innerHTML = bl1WicketC
        ShowElement('bwp1')
    }else if(bl2runs.getAttribute('id')==='bl2Run'){
        bt1w.innerHTML = blwer2.value;
        bl2WicketC++
        bl2Wicket.innerHTML = bl2WicketC
        ShowElement('bwp1')
    }else if(bl3runs.getAttribute('id')==='bl3Run'){
        bt1w.innerHTML = blwer3.value;
        bl3WicketC++
        bl3Wicket.innerHTML = bl3WicketC
        ShowElement('bwp1')
    } else if(bl4runs.getAttribute('id')==='bl4Run'){
        bt1w.innerHTML = blwer4.value;
        bl4WicketC++
        bl4Wicket.innerHTML = bl4WicketC
        ShowElement('bwp1')
    }else if(bl5runs.getAttribute('id')==='bl5Run'){
        bt1w.innerHTML = blwer5.value;
        bl5WicketC++
        bl5Wicket.innerHTML = bl5WicketC
        ShowElement('bwp1')
    }else if(bl6runs.getAttribute('id')==='bl6Run'){
        bt1w.innerHTML = blwer6.value;
        bl6WicketC++
        bl6Wicket.innerHTML = bl6WicketC
        ShowElement('bwp1')
    }else if(bl7runs.getAttribute('id')==='bl7Run'){
        bt1w.innerHTML = blwer7.value;
        bl7WicketC++
        bl7Wicket.innerHTML = bl7WicketC
        ShowElement('bwp1')
    } else if(bl8runs.getAttribute('id')==='bl8Run'){
        bt1w.innerHTML = blwer8.value;
        bl8WicketC++
        bl8Wicket.innerHTML = bl8WicketC
        ShowElement('bwp1')
    } else{
        runOut('bwp1')
    }

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
let bt1undo = document.querySelector('.bt1undo')
bt1undo.addEventListener('click',function(){
    p1RunPlus.style.display = 'inline'
    p1BallPlus.style.display = 'inline'
    p1RunMinus.style.display = 'inline'
    p1BallMinus.style.display = 'inline'
    p1Out.style.display = 'inline'
    p1Six.style.display = 'inline'
    p1Four.style.display = 'inline'
    p1two.style.display = 'inline'
    bt1undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p1ballC--;
    p1DotsC--;
    p1Ball.innerHTML = p1ballC;
    p1Dots.innerHTML = p1DotsC;
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
    hideElement('bwp1')

    
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }

    
        ShowElement('bwtn1')
        hideElement('bwp1')
    

    
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p2Out.addEventListener('click',function(){
    p2RunPlus.style.display = 'none'
    p2BallPlus.style.display = 'none'
    p2RunMinus.style.display = 'none'
    p2BallMinus.style.display = 'none'
    p2Out.style.display = 'none'
    p2Six.style.display = 'none'
    p2Four.style.display = 'none'
    p2two.style.display = 'none'
    bt2undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p2ballC++;
    p2DotsC++;
    p2Ball.innerHTML = p2ballC;
    p2Dots.innerHTML = p2DotsC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);

    
// let bt2w = getId('bt2Wicker')
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt2w.innerHTML = blwer1.value;
    bl1WicketC++
        bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp2')
    // bt2w.classList.remove('hidden')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt2w.innerHTML = blwer2.value;
    bl2WicketC++
        bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp2')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt2w.innerHTML = blwer3.value;
    bl3WicketC++
        bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp2')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt2w.innerHTML = blwer4.value;
    bl4WicketC++
        bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp2')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt2w.innerHTML = blwer5.value;
    bl5WicketC++
        bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp2')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt2w.innerHTML = blwer6.value;
    bl6WicketC++
        bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp2')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt2w.innerHTML = blwer7.value;
    bl7WicketC++
        bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp2')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt2w.innerHTML = blwer8.value;
    bl8WicketC++
        bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp2')
} else{
    ShowElement('bwp2')
    // hideElement('bwtn2')
}


    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt2undo = document.querySelector('.bt2undo')

bt2undo.addEventListener('click',function(){
    p2RunPlus.style.display = 'inline'
    p2BallPlus.style.display = 'inline'
    p2RunMinus.style.display = 'inline'
    p2BallMinus.style.display = 'inline'
    p2Out.style.display = 'inline'
    p2Six.style.display = 'inline'
    p2Four.style.display = 'inline'
    p2two.style.display = 'inline'
    bt2undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p2ballC--;
    p2DotsC--;
    p2Ball.innerHTML = p2ballC;
    p2Dots.innerHTML = p2DotsC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
    ShowElement('bwtn2')
    hideElement('bwp2')

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp2')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})



p3Out.addEventListener('click',function(){
    p3RunPlus.style.display = 'none'
    p3BallPlus.style.display = 'none'
    p3RunMinus.style.display = 'none'
    p3BallMinus.style.display = 'none'
    p3Out.style.display = 'none'
    p3Six.style.display = 'none'
    p3Four.style.display = 'none'
    p3two.style.display = 'none'
    bt3undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p3ballC++;
    p3DotsC++;
    p3Ball.innerHTML = p3ballC;
    p3Dots.innerHTML = p3DotsC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);


    if(bl1runs.getAttribute('id')==='bl1Run'){
        bt3w.innerHTML = blwer1.value;
        bl1WicketC++
        bl1Wicket.innerHTML = bl1WicketC
        ShowElement('bwp3')
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bt3w.innerHTML = blwer2.value;
        bl2WicketC++
        bl2Wicket.innerHTML = bl2WicketC
        ShowElement('bwp3')
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bt3w.innerHTML = blwer3.value;
        bl3WicketC++
        bl3Wicket.innerHTML = bl3WicketC
        ShowElement('bwp3')
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bt3w.innerHTML = blwer4.value;
        bl4WicketC++
        bl4Wicket.innerHTML = bl4WicketC
        ShowElement('bwp3')
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bt3w.innerHTML = blwer5.value;
        bl5WicketC++
        bl5Wicket.innerHTML = bl5WicketC
        ShowElement('bwp3')
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bt3w.innerHTML = blwer6.value;
        bl6WicketC++
        bl6Wicket.innerHTML = bl6WicketC
        ShowElement('bwp3')
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bt3w.innerHTML = blwer7.value;
        bl7WicketC++
        bl7Wicket.innerHTML = bl7WicketC
        ShowElement('bwp3')
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bt3w.innerHTML = blwer8.value;
        bl8WicketC++
        bl8Wicket.innerHTML = bl8WicketC
        ShowElement('bwp3')
    } else{
        ShowElement('bwp3')
        // hideElement('bwtn3')
    }


    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt3undo = document.querySelector('.bt3undo')
bt3undo.addEventListener('click',function(){
    p3RunPlus.style.display = 'inline'
    p3BallPlus.style.display = 'inline'
    p3RunMinus.style.display = 'inline'
    p3BallMinus.style.display = 'inline'
    p3Out.style.display = 'inline'
    p3Six.style.display = 'inline'
    p3Four.style.display = 'inline'
    p3two.style.display = 'inline'
    bt3undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p3ballC--;
    p3DotsC--;
    p3Ball.innerHTML = p3ballC;
    p3Dots.innerHTML = p3DotsC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
    hideElement('bwp3')

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }

    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p4Out.addEventListener('click',function(){
    p4RunPlus.style.display = 'none'
    p4BallPlus.style.display = 'none'
    p4RunMinus.style.display = 'none'
    p4BallMinus.style.display = 'none'
    p4Out.style.display = 'none'
    p4Six.style.display = 'none'
    p4Four.style.display = 'none'
    p4two.style.display = 'none'
    bt4undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p4ballC++;
    p4DotsC++;
    p4Ball.innerHTML = p4ballC;
    p4Dots.innerHTML = p4DotsC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt4w.innerHTML = blwer1.value;
    bl1WicketC++
        bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp4')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt4w.innerHTML = blwer2.value;
    bl2WicketC++
        bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp4')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt4w.innerHTML = blwer3.value;
    bl3WicketC++
        bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp4')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt4w.innerHTML = blwer4.value;
    bl4WicketC++
        bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp4')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt4w.innerHTML = blwer5.value;
    bl5WicketC++
        bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp4')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt4w.innerHTML = blwer6.value;
    bl6WicketC++
        bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp4')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt4w.innerHTML = blwer7.value;
    bl7WicketC++
        bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp4')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt4w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp4')
}else{
    ShowElement('bwp4')
    // hideElement('bwtn4')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
let bt4undo = document.querySelector('.bt4undo')
bt4undo.addEventListener('click',function(){
    p4RunPlus.style.display = 'inline'
    p4BallPlus.style.display = 'inline'
    p4RunMinus.style.display = 'inline'
    p4BallMinus.style.display = 'inline'
    p4Out.style.display = 'inline'
    p4Six.style.display = 'inline'
    p4Four.style.display = 'inline'
    p4two.style.display = 'inline'
    bt4undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p4ballC--;
    p4DotsC--;
    p4Ball.innerHTML = p4ballC;
    p4Dots.innerHTML = p4DotsC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp4')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})
p11Out.addEventListener('click',function(){
    p11RunPlus.style.display = 'none'
    p11BallPlus.style.display = 'none'
    p11RunMinus.style.display = 'none'
    p11BallMinus.style.display = 'none'
    p11Out.style.display = 'none'
    p11Six.style.display = 'none'
    p11Four.style.display = 'none'
    p11two.style.display = 'none'
    bt11undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p11ballC++;
    p11DotsC++;
    p11Ball.innerHTML = p11ballC;
    p11Dots.innerHTML = p11DotsC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt11w.innerHTML = blwer1.value;
    bl1WicketC++
        bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp11')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt11w.innerHTML = blwer2.value;
    bl2WicketC++
        bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp11')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt11w.innerHTML = blwer3.value;
    bl3WicketC++
        bl3Wicket.innerHTML = b31WicketC
    ShowElement('bwp11')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt11w.innerHTML = blwer4.value;
    bl4WicketC++
        bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp11')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt11w.innerHTML = blwer5.value;
    bl5WicketC++
        bl5Wicket.innerHTML = bl5Wick1etC
    ShowElement('bwp11')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt11w.innerHTML = blwer6.value;
    bl6WicketC++
        bl6Wicket.innerHTML = bl6Wicke1tC
    ShowElement('bwp11')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt11w.innerHTML = blwer7.value;
    bl7WicketC++
        bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp11')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt11w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp11')
}else{
    ShowElement('bwp11')
    // hideElement('bwtn11')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
let bt11undo = document.querySelector('.bt11undo')
bt11undo.addEventListener('click',function(){
    p11RunPlus.style.display = 'inline'
    p11BallPlus.style.display = 'inline'
    p11RunMinus.style.display = 'inline'
    p11BallMinus.style.display = 'inline'
    p11Out.style.display = 'inline'
    p11Six.style.display = 'inline'
    p11Four.style.display = 'inline'
    p11two.style.display = 'inline'
    bt11undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p11ballC--;
    p11DotsC--;
    p11Ball.innerHTML = p11ballC;
    p11Dots.innerHTML = p11DotsC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp11')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})
p5Out.addEventListener('click',function(){
    p5RunPlus.style.display = 'none'
    p5BallPlus.style.display = 'none'
    p5RunMinus.style.display = 'none'
    p5BallMinus.style.display = 'none'
    p5Out.style.display = 'none'
    p5Six.style.display = 'none'
    p5Four.style.display = 'none'
    p5two.style.display = 'none'
    bt5undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p5ballC++;
    p5DotsC++;
    p5Ball.innerHTML = p5ballC;
    p5Dots.innerHTML = p5DotsC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt5w.innerHTML = blwer1.value;
    bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp5')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt5w.innerHTML = blwer2.value;
    bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp5')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt5w.innerHTML = blwer3.value;
        bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp5')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt5w.innerHTML = blwer4.value;
        bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp5')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt5w.innerHTML = blwer5.value;
        bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp5')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt5w.innerHTML = blwer6.value;
        bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp5')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt5w.innerHTML = blwer7.value;
        bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp5')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt5w.innerHTML = blwer8.value;
        bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp5')
}else{
    ShowElement('bwp5')
    // hideElement('bwtn5')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt5undo = document.querySelector('.bt5undo')
bt5undo.addEventListener('click',function(){
    p5RunPlus.style.display = 'inline'
    p5BallPlus.style.display = 'inline'
    p5RunMinus.style.display = 'inline'
    p5BallMinus.style.display = 'inline'
    p5Out.style.display = 'inline'
    p5Six.style.display = 'inline'
    p5Four.style.display = 'inline'
    p5two.style.display = 'inline'
    bt5undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p5ballC--;
    p5DotsC--;
    p5Ball.innerHTML = p5ballC;
    p5Dots.innerHTML = p5DotsC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp5')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p6Out.addEventListener('click',function(){
    p6RunPlus.style.display = 'none'
    p6BallPlus.style.display = 'none'
    p6RunMinus.style.display = 'none'
    p6BallMinus.style.display = 'none'
    p6Out.style.display = 'none'
    p6Six.style.display = 'none'
    p6Four.style.display = 'none'
    p6two.style.display = 'none'
    bt6undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p6ballC++;
    p6DotsC++;
    p6Ball.innerHTML = p6ballC;
    p6Dots.innerHTML = p6DotsC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt6w.innerHTML = blwer1.value;
    bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp6')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt6w.innerHTML = blwer2.value;
    bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp6')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt6w.innerHTML = blwer3.value;
    bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp6')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt6w.innerHTML = blwer4.value;
    bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp6')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt6w.innerHTML = blwer5.value;
    bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp6')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt6w.innerHTML = blwer6.value;
    bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp6')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt6w.innerHTML = blwer7.value;
    bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp6')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt6w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp6')
}else{
    ShowElement('bwp6')
    // hideElement('bwtn6')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt6undo = document.querySelector('.bt6undo')
bt6undo.addEventListener('click',function(){
    p6RunPlus.style.display = 'inline'
    p6BallPlus.style.display = 'inline'
    p6RunMinus.style.display = 'inline'
    p6BallMinus.style.display = 'inline'
    p6Out.style.display = 'inline'
    p6Six.style.display = 'inline'
    p6Four.style.display = 'inline'
    p6two.style.display = 'inline'
    bt6undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p6ballC--;
    p6DotsC--;
    p6Ball.innerHTML = p6ballC;
    p6Dots.innerHTML = p6DotsC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp6')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p7Out.addEventListener('click',function(){
    p7RunPlus.style.display = 'none'
    p7BallPlus.style.display = 'none'
    p7RunMinus.style.display = 'none'
    p7BallMinus.style.display = 'none'
    p7Out.style.display = 'none'
    p7Six.style.display = 'none'
    p7Four.style.display = 'none'
    p7two.style.display = 'none'
    bt7undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p7ballC++;
    p7DotsC++;
    p7Ball.innerHTML = p7ballC;
    p7Dots.innerHTML = p7DotsC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt7w.innerHTML = blwer1.value;
    bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp7')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt7w.innerHTML = blwer2.value;
    bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp7')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt7w.innerHTML = blwer3.value;
    bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp7')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt7w.innerHTML = blwer4.value;
    bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp7')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt7w.innerHTML = blwer5.value;
    bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp7')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt7w.innerHTML = blwer6.value;
    bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp7')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt7w.innerHTML = blwer7.value;
    bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp7')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt7w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp7')
}else{
    ShowElement('bwp7')
    // hideElement('bwtn7')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt7undo = document.querySelector('.bt7undo')
bt7undo.addEventListener('click',function(){
    p7RunPlus.style.display = 'inline'
    p7BallPlus.style.display = 'inline'
    p7RunMinus.style.display = 'inline'
    p7BallMinus.style.display = 'inline'
    p7Out.style.display = 'inline'
    p7Six.style.display = 'inline'
    p7Four.style.display = 'inline'
    p7two.style.display = 'inline'
    bt7undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p7ballC--;
    p7DotsC--;
    p7Ball.innerHTML = p7ballC;
    p7Dots.innerHTML = p7DotsC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp7')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p8Out.addEventListener('click',function(){
    p8RunPlus.style.display = 'none'
    p8BallPlus.style.display = 'none'
    p8RunMinus.style.display = 'none'
    p8BallMinus.style.display = 'none'
    p8Out.style.display = 'none'
    p8Six.style.display = 'none'
    p8Four.style.display = 'none'
    p8two.style.display = 'none'
    bt8undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p8ballC++;
    p8DotsC++;
    p8Ball.innerHTML = p8ballC;
    p8Dots.innerHTML = p8DotsC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt8w.innerHTML = blwer1.value;
    bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp8')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt8w.innerHTML = blwer2.value;
    bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp8')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt8w.innerHTML = blwer3.value;
    bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp8')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt8w.innerHTML = blwer4.value;
    bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp8')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt8w.innerHTML = blwer5.value;
    bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp8')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt8w.innerHTML = blwer6.value;
    bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp8')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt8w.innerHTML = blwer7.value;
    bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp8')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt8w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp8')
}else{
    ShowElement('bwp2')
    // hideElement('bwtn2')
}

    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})

let bt8undo = document.querySelector('.bt8undo')
bt8undo.addEventListener('click',function(){
    p8RunPlus.style.display = 'inline'
    p8BallPlus.style.display = 'inline'
    p8RunMinus.style.display = 'inline'
    p8BallMinus.style.display = 'inline'
    p8Out.style.display = 'inline'
    p8Six.style.display = 'inline'
    p8Four.style.display = 'inline'
    p8two.style.display = 'inline'
    bt8undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p8ballC--;
    p8DotsC--;
    p8Ball.innerHTML = p8ballC;
    p8Dots.innerHTML = p8DotsC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp8')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})
p9Out.addEventListener('click',function(){
    p9RunPlus.style.display = 'none'
    p9BallPlus.style.display = 'none'
    p9RunMinus.style.display = 'none'
    p9BallMinus.style.display = 'none'
    p9Out.style.display = 'none'
    p9Six.style.display = 'none'
    p9Four.style.display = 'none'
    p9two.style.display = 'none'
    bt9undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p9ballC++;
    p9DotsC++;
    p9Ball.innerHTML = p9ballC;
    p9Dots.innerHTML = p9DotsC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);

    
if(bl1runs.getAttribute('id')==='bl1Run'){
    bt9w.innerHTML = blwer1.value;
    bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
    ShowElement('bwp9')
} if(bl2runs.getAttribute('id')==='bl2Run'){
    bt9w.innerHTML = blwer2.value;
    bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    ShowElement('bwp9')
} if(bl3runs.getAttribute('id')==='bl3Run'){
    bt9w.innerHTML = blwer3.value;
    bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
    ShowElement('bwp9')
}  if(bl4runs.getAttribute('id')==='bl4Run'){
    bt9w.innerHTML = blwer4.value;
    bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
    ShowElement('bwp9')
} if(bl5runs.getAttribute('id')==='bl5Run'){
    bt9w.innerHTML = blwer5.value;
    bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
    ShowElement('bwp9')
} if(bl6runs.getAttribute('id')==='bl6Run'){
    bt9w.innerHTML = blwer6.value;
    bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
    ShowElement('bwp9')
} if(bl7runs.getAttribute('id')==='bl7Run'){
    bt9w.innerHTML = blwer7.value;
    bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
    ShowElement('bwp9')
}  if(bl8runs.getAttribute('id')==='bl8Run'){
    bt9w.innerHTML = blwer8.value;
    bl8WicketC++
    bl8Wicket.innerHTML = bl8WicketC
    ShowElement('bwp9')
}else{
    ShowElement('bwp2')
    hideElement('bwtn2')
}

    


    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    
})

let bt9undo = document.querySelector('.bt9undo')
bt9undo.addEventListener('click',function(){
    p9RunPlus.style.display = 'inline'
    p9BallPlus.style.display = 'inline'
    p9RunMinus.style.display = 'inline'
    p9BallMinus.style.display = 'inline'
    p9Out.style.display = 'inline'
    p9Six.style.display = 'inline'
    p9Four.style.display = 'inline'
    p9two.style.display = 'inline'
    bt9undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p9ballC--;
    p9DotsC--;
    p9Ball.innerHTML = p9ballC;
    p9Dots.innerHTML = p9DotsC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp9')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})

p10Out.addEventListener('click',function(){
    p10RunPlus.style.display = 'none'
    p10BallPlus.style.display = 'none'
    p10RunMinus.style.display = 'none'
    p10BallMinus.style.display = 'none'
    p10Out.style.display = 'none'
    p10Six.style.display = 'none'
    p10Four.style.display = 'none'
    p10two.style.display = 'none'
    bt10undo.style.display = 'inline'
    wicketConter++;
    totalWicket.innerHTML = wicketConter;
    p10ballC++;
    p10DotsC++;
    p10Ball.innerHTML = p10ballC;
    p10Dots.innerHTML = p10DotsC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);

    ShowElement('bwp10')
    hideElement('bwtn10')


    if(bl1runs.getAttribute('id')==='bl1Run'){
        bt10w.innerHTML = blwer1.value;
        bl1WicketC++
    bl1Wicket.innerHTML = bl1WicketC
        ShowElement('bwp10')
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bt10w.innerHTML = blwer2.value;
        ShowElement('bwp10')
        bl2WicketC++
    bl2Wicket.innerHTML = bl2WicketC
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bt10w.innerHTML = blwer3.value;
        bl3WicketC++
    bl3Wicket.innerHTML = bl3WicketC
        ShowElement('bwp10')
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bt10w.innerHTML = blwer4.value;
        bl4WicketC++
    bl4Wicket.innerHTML = bl4WicketC
        ShowElement('bwp10')
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bt10w.innerHTML = blwer5.value;
        bl5WicketC++
    bl5Wicket.innerHTML = bl5WicketC
        ShowElement('bwp10')
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bt10w.innerHTML = blwer6.value;
        bl6WicketC++
    bl6Wicket.innerHTML = bl6WicketC
        ShowElement('bwp10')
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bt10w.innerHTML = blwer7.value;
        bl7WicketC++
    bl7Wicket.innerHTML = bl7WicketC
        ShowElement('bwp10')
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bt10w.innerHTML = blwer8.value;
        bl8WicketC++
        bl8Wicket.innerHTML = bl8WicketC
        ShowElement('bwp10')
    }
    
    
    let sp = document.createElement('span')
    sp.innerHTML = 'w '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
let bt10undo = document.querySelector('.bt10undo')
bt10undo.addEventListener('click',function(){
    p10RunPlus.style.display = 'inline'
    p10BallPlus.style.display = 'inline'
    p10RunMinus.style.display = 'inline'
    p10BallMinus.style.display = 'inline'
    p10Out.style.display = 'inline'
    p10Six.style.display = 'inline'
    p10Four.style.display = 'inline'
    p10two.style.display = 'inline'
    bt10undo.style.display = 'none'
    wicketConter--;
    totalWicket.innerHTML = wicketConter;
    p10ballC--;
    p10DotsC--;
    p10Ball.innerHTML = p10ballC;
    p10Dots.innerHTML = p10DotsC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1WicketC--
        bl1Wicket.innerHTML = bl1WicketC
        
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2WicketC--
        bl2Wicket.innerHTML = bl2WicketC
      
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3WicketC--
        bl3Wicket.innerHTML = b31WicketC
      
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4WicketC--
        bl4Wicket.innerHTML = bl4WicketC
       
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5WicketC--
            bl5Wicket.innerHTML = bl5Wick1etC
       
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6WicketC--
        bl6Wicket.innerHTML = bl6Wicke1tC
       
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7WicketC--
        bl7Wicket.innerHTML = bl7WicketC
        
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8WicketC--
        bl8Wicket.innerHTML = bl8WicketC
       
    }
    hideElement('bwp10')
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})
// Out portion #End
// Batter Name Protion #Start
let err2 = document.querySelector('.err2')
btn1.addEventListener('click',function(){
    if(!(b1.value)){
        err2.innerHTML = 'Write a Batter name.'
    }else{
        err2.style.display = 'none'
        if (!sessionStorage.getItem('initp1')) {
            sessionStorage.setItem('initp1', b1.value);
            player1.style.display= 'block'
          }
          
        let b1dis = sessionStorage.getItem('initp1');
        p1.innerHTML = b1dis;
        // p1.innerHTML = b1.value;
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
        // p2.innerHTML = b2.value;
        if (!sessionStorage.getItem('initp2')) {
            sessionStorage.setItem('initp2', b2.value);
            player2.style.display= 'block'
          }
          
        let b2dis = sessionStorage.getItem('initp2');
        p2.innerHTML = b2dis;
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
        // p3.innerHTML = b3.value;
        if (!sessionStorage.getItem('initp3')) {
            sessionStorage.setItem('initp3', b3.value);
            player3.style.display= 'block'
          }
          
        let b3dis = sessionStorage.getItem('initp3');
        p3.innerHTML = b3dis;
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
        // p4.innerHTML = b4.value;
        if (!sessionStorage.getItem('initp4')) {
            sessionStorage.setItem('initp4', b4.value);
            player4.style.display= 'block'
          }
          
        let b4dis = sessionStorage.getItem('initp4');
        p4.innerHTML = b4dis;
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
        if (!sessionStorage.getItem('initp5')) {
            sessionStorage.setItem('initp5', b5.value);
            player5.style.display= 'block'
          }
          
        let b5dis = sessionStorage.getItem('initp5');
        p5.innerHTML = b5dis;
        // p5.innerHTML = b5.value;
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
        if (!sessionStorage.getItem('initp6')) {
            sessionStorage.setItem('initp6', b6.value);
            player6.style.display= 'block'
          }
          
        let b6dis = sessionStorage.getItem('initp6');
        p6.innerHTML = b6dis;
        // p6.innerHTML = b6.value;
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
        if (!sessionStorage.getItem('initp7')) {
            sessionStorage.setItem('initp7', b7.value);
            player7.style.display= 'block'
          }
          
        let b7dis = sessionStorage.getItem('initp7');
        p7.innerHTML = b7dis;
        // p7.innerHTML = b7.value;
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
        if (!sessionStorage.getItem('initp8')) {
            sessionStorage.setItem('initp8', b8.value);
            player8.style.display= 'block'
          }
          
        let b8dis = sessionStorage.getItem('initp8');
        p8.innerHTML = b8dis;
        // p8.innerHTML = b8.value;
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
        if (!sessionStorage.getItem('initp9')) {
            sessionStorage.setItem('initp9', b9.value);
            player9.style.display= 'block'
          }
          
        let b9dis = sessionStorage.getItem('initp9');
        p9.innerHTML = b9dis;
        // p9.innerHTML = b9.value;
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
        if (!sessionStorage.getItem('initp10')) {
            sessionStorage.setItem('initp10', b10.value);
            player10.style.display= 'block'
          }
          
        let b10dis = sessionStorage.getItem('initp10');
        p10.innerHTML = b10dis;
        // p10.innerHTML = b10.value;
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
        if (!sessionStorage.getItem('initp11')) {
            sessionStorage.setItem('initp11', b11.value);
            player11.style.display= 'block'
          }
          
        let b11dis = sessionStorage.getItem('initp11');
        p11.innerHTML = b11dis;
        // p11.innerHTML = b11.value;
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
if (!sessionStorage.getItem('initrunC')) {
    sessionStorage.setItem('initrunC', '0');
  }
  
  let runC = Number(sessionStorage.getItem('initrunC'));
p1RunPlus.addEventListener('click',function(){

    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    }
    if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runC++;
    sessionStorage.setItem('initrunC', runC);
    p1run.innerHTML = runC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p1ballC++;
    sessionStorage.setItem('initp1ballC', p1ballC);
    p1Ball.innerHTML = p1ballC;

    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
    
})
p1run.innerHTML = runC;


let p1Dots = document.querySelector('.p1Dots')
let p1TSix = document.querySelector('.p1TSix')
let p1TFour = document.querySelector('.p1TFour')
let p1DotsC = 0;
let p1TSixC = 0;
let p1TFourC = 0;



let p1Six = document.querySelector('.p1Six')
let p1Four = document.querySelector('.p1Four')
p1Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p1TSixC++;
    runC=runC+6;
    
    p1run.innerHTML = runC;
    sessionStorage.setItem('initrunC', runC);
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p1TSix.innerHTML = p1TSixC
    p1ballC++;
    sessionStorage.setItem('initp1ballC', p1ballC);
    p1Ball.innerHTML = p1ballC;
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p1Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runC=runC+4;
    sessionStorage.setItem('initrunC', runC);
    p1run.innerHTML = runC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p1TFourC++;
    p1TFour.innerHTML = p1TFourC;
    p1ballC++;
    sessionStorage.setItem('initp1ballC', p1ballC);
    p1Ball.innerHTML = p1ballC;
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

let p1two = document.querySelector('.p1two')
p1two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    runC=runC+2;
    sessionStorage.setItem('initrunC', runC);
    p1run.innerHTML = runC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p1ballC++;
    sessionStorage.setItem('initp1ballC', p1ballC);
    p1Ball.innerHTML = p1ballC;
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`;
        needToWin.style.color = 'red';
    }

})

p1RunMinus.addEventListener('click',function(){
    if(runC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        runC--;
        sessionStorage.setItem('initrunC', runC);
        p1run.innerHTML = runC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
    
})

if (!sessionStorage.getItem('initp2RunC')) {
    sessionStorage.setItem('initp2RunC', '0');
  }
let p2RunC = Number(sessionStorage.getItem('initp2RunC'));

p2RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p2RunC++;
    sessionStorage.setItem('initp2RunC', p2RunC);
    p2run.innerHTML = p2RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p2ballC++;
    sessionStorage.setItem('initp2ballC', p2ballC);
    p2Ball.innerHTML = p2ballC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
let p2Dots = document.querySelector('.p2Dots')
let p2TSix = document.querySelector('.p2TSix')
let p2TFour = document.querySelector('.p2TFour')
let p2DotsC = 0;
let p2TSixC = 0;
let p2TFourC = 0;

let p2Six = document.querySelector('.p2Six')
let p2Four = document.querySelector('.p2Four')
p2Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p2RunC=p2RunC+6;
    sessionStorage.setItem('initp2RunC', p2RunC);
    p2run.innerHTML = p2RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p2TSixC++;
    p2TSix.innerHTML = p2TSixC;
    p2ballC++;
    sessionStorage.setItem('initp2ballC', p2ballC);
    p2Ball.innerHTML = p2ballC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

let p2two = document.querySelector('.p2two')
p2two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p2RunC=p2RunC+2;
    sessionStorage.setItem('initp2RunC', p2RunC);
    p2run.innerHTML = p2RunC;
    runCounter+=2;
    totalRun.innerHTML=runCounter;
    sessionStorage.setItem('initTotalrun', runCounter);
    p2ballC++;
    sessionStorage.setItem('initp2ballC', p2ballC);
     sessionStorage.setItem('initp2ballC', p2ballC);
    p2Ball.innerHTML = p2ballC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p2Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p2RunC=p2RunC+4;
    sessionStorage.setItem('initp2RunC', p2RunC);
    p2run.innerHTML = p2RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p2TFourC++;
    p2TFour.innerHTML = p2TFourC;
    p2ballC++;
    sessionStorage.setItem('initp2ballC', p2ballC);
    p2Ball.innerHTML = p2ballC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p2RunMinus.addEventListener('click',function(){
    
    if(p2RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p2RunC--;
        sessionStorage.setItem('initp2RunC', p2RunC);
        p2run.innerHTML = p2RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p2run.innerHTML = p2RunC;

if (!sessionStorage.getItem('initp3RunC')) {
    sessionStorage.setItem('initp3RunC', '0');
  }
let p3RunC = Number(sessionStorage.getItem('initp3RunC'));

p3RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p3RunC++;
    sessionStorage.setItem('initp3RunC', p3RunC);
    p3run.innerHTML = p3RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p3ballC++;
    sessionStorage.setItem('initp3ballC', p3ballC)
    p3Ball.innerHTML = p3ballC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let p3Dots = document.querySelector('.p3Dots')
let p3TSix = document.querySelector('.p3TSix')
let p3TFour = document.querySelector('.p3TFour')
let p3DotsC = 0;
let p3TSixC = 0;
let p3TFourC = 0;

let p3Six = document.querySelector('.p3Six')
let p3Four = document.querySelector('.p3Four')
p3Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p3RunC=p3RunC+6;
    sessionStorage.setItem('initp3RunC', p3RunC);
    p3run.innerHTML = p3RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p3TSixC++;
    p3TSix.innerHTML = p3TSixC;
    p3ballC++;
    sessionStorage.setItem('initp3ballC', p3ballC)
    p3Ball.innerHTML = p3ballC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

let p3two = document.querySelector('.p3two')
p3two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p3RunC=p3RunC+2;
    sessionStorage.setItem('initp3RunC', p3RunC);
    p3run.innerHTML = p3RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p3ballC++;
    sessionStorage.setItem('initp3ballC', p3ballC)

    p3Ball.innerHTML = p3ballC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p3Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p3RunC=p3RunC+4;
    sessionStorage.setItem('initp3RunC', p3RunC);
    p3run.innerHTML = p3RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p3TFourC++;
    p3TFour.innerHTML = p3TFourC;
    p3ballC++;
    sessionStorage.setItem('initp3ballC', p3ballC)
    p3Ball.innerHTML = p3ballC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p3RunMinus.addEventListener('click',function(){
    
    if(p3RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p3RunC--;
        sessionStorage.setItem('initp3RunC', p3RunC);
        p3run.innerHTML = p3RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
    
})
p3run.innerHTML = p3RunC;

if (!sessionStorage.getItem('initp4RunC')) {
    sessionStorage.setItem('initp4RunC', '0');
  }
let p4RunC = Number(sessionStorage.getItem('initp4RunC'));


p4RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p4RunC++;
    sessionStorage.setItem('initp4RunC', p4RunC);
    p4run.innerHTML = p4RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p4ballC++;
    sessionStorage.setItem('initp4ballC', p4ballC)
    p4Ball.innerHTML = p4ballC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let p4Dots = document.querySelector('.p4Dots')
let p4TSix = document.querySelector('.p4TSix')
let p4TFour = document.querySelector('.p4TFour')
let p4DotsC = 0;
let p4TSixC = 0;
let p4TFourC = 0;

let p4Six = document.querySelector('.p4Six')
let p4Four = document.querySelector('.p4Four')
p4Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p4RunC=p4RunC+6;
    sessionStorage.setItem('initp4RunC', p4RunC);
    p4run.innerHTML = p4RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p4TSixC++;
    p4TSix.innerHTML = p4TSixC;
    p4ballC++;
    sessionStorage.setItem('initp4ballC', p4ballC)
    p4Ball.innerHTML = p4ballC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p4two = document.querySelector('.p4two')
p4two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p4RunC=p4RunC+2;
    sessionStorage.setItem('initp4RunC', p4RunC);
    p4run.innerHTML = p4RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p4ballC++;
    sessionStorage.setItem('initp4ballC', p4ballC)

    p4Ball.innerHTML = p4ballC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p4Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p4RunC=p4RunC+4;
    sessionStorage.setItem('initp4RunC', p4RunC);
    p4run.innerHTML = p4RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p4TFourC++;
    p4TFour.innerHTML = p4TFourC;
    p4ballC++;
    sessionStorage.setItem('initp4ballC', p4ballC)
    p4Ball.innerHTML = p4ballC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p4RunMinus.addEventListener('click',function(){
    if(p4RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p4RunC--;
        sessionStorage.setItem('initp4RunC', p4RunC);
        p4run.innerHTML = p4RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p4run.innerHTML = p4RunC;

if (!sessionStorage.getItem('initp5RunC')) {
    sessionStorage.setItem('initp5RunC', '0');
  }
let p5RunC = Number(sessionStorage.getItem('initp5RunC'));


p5RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    }if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p5RunC++; 
    sessionStorage.setItem('initp5RunC', p5RunC);  
    p5run.innerHTML = p5RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p5ballC++;
    sessionStorage.setItem('initp5ballC', p5ballC)
    p5Ball.innerHTML = p5ballC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let p5Dots = document.querySelector('.p5Dots')
let p5TSix = document.querySelector('.p5TSix')
let p5TFour = document.querySelector('.p5TFour')
let p5DotsC = 0;
let p5TSixC = 0;
let p5TFourC = 0;
let p5Six = document.querySelector('.p5Six')
let p5Four = document.querySelector('.p5Four')
p5Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    }  if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p5RunC=p5RunC+6;
    sessionStorage.setItem('initp5RunC', p5RunC);
    p5run.innerHTML = p5RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p5TSixC++;
    p5TSix.innerHTML = p5TSixC;
    p5ballC++;
    sessionStorage.setItem('initp5ballC', p5ballC)
    p5Ball.innerHTML = p5ballC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p5two = document.querySelector('.p5two')
p5two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p5RunC=p5RunC+2;
    sessionStorage.setItem('initp5RunC', p5RunC);
    p5run.innerHTML = p5RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p5ballC++;
    sessionStorage.setItem('initp5ballC', p5ballC)
    p5Ball.innerHTML = p5ballC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p5Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p5RunC=p5RunC+4;
    sessionStorage.setItem('initp5RunC', p5RunC);
    p5run.innerHTML = p5RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p5TFourC++;
    p5TFour.innerHTML = p5TFourC;
    p5ballC++;
    sessionStorage.setItem('initp5ballC', p5ballC)
    p5Ball.innerHTML = p5ballC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p5RunMinus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC--;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC--;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC--;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC--;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC--;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC--;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC--;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC--;
        bl8RunPlus1.innerHTML = bl8RunC;
    }
    if(p5RunC>0){
        p5RunC--;
        sessionStorage.setItem('initp5RunC', p5RunC);
        p5run.innerHTML = p5RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p5run.innerHTML = p5RunC;

if (!sessionStorage.getItem('initp6RunC')) {
    sessionStorage.setItem('initp6RunC', '0');
  }
let p6RunC = Number(sessionStorage.getItem('initp6RunC'));

p6RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p6RunC++;
    sessionStorage.setItem('initp6RunC', p6RunC);
    p6run.innerHTML = p6RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p6ballC++;
    sessionStorage.setItem('initp6ballC', p6ballC)
    p6Ball.innerHTML = p6ballC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let p6Dots = document.querySelector('.p6Dots')
let p6TSix = document.querySelector('.p6TSix')
let p6TFour = document.querySelector('.p6TFour')
let p6DotsC = 0;
let p6TSixC = 0;
let p6TFourC = 0;
let p6Six = document.querySelector('.p6Six')
let p6Four = document.querySelector('.p6Four')
p6Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p6RunC=p6RunC+6;
    sessionStorage.setItem('initp6RunC', p6RunC);
    p6run.innerHTML = p6RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p6TSixC++;
    p6TSix.innerHTML = p6TSixC;
    p6ballC++;
    sessionStorage.setItem('initp6ballC', p6ballC)
    p6Ball.innerHTML = p6ballC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p6two = document.querySelector('.p6two')
p6two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p6RunC=p6RunC+2;
    sessionStorage.setItem('initp6RunC', p6RunC);
    p6run.innerHTML = p6RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p6ballC++;
    sessionStorage.setItem('initp6ballC', p6ballC)
    p6Ball.innerHTML = p6ballC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p6Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p6RunC=p6RunC+4;
    sessionStorage.setItem('initp6RunC', p6RunC);
    p6run.innerHTML = p6RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p6TFourC++;
    p6TFour.innerHTML = p6TFourC;
    p6ballC++;
    sessionStorage.setItem('initp6ballC', p6ballC)
    p6Ball.innerHTML = p6ballC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p6RunMinus.addEventListener('click',function(){
    if(p6RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p6RunC--;
        sessionStorage.setItem('initp6RunC', p6RunC);
        p6run.innerHTML = p6RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p6run.innerHTML = p6RunC;

if (!sessionStorage.getItem('initp7RunC')) {
    sessionStorage.setItem('initp7RunC', '0');
  }
let p7RunC = Number(sessionStorage.getItem('initp7RunC'));

p7RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p7RunC++;
    sessionStorage.setItem('initp7RunC', p7RunC);
    p7run.innerHTML = p7RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p7ballC++;
    sessionStorage.setItem('initp7ballC', p7ballC)
    p7Ball.innerHTML = p7ballC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

let p7Dots = document.querySelector('.p7Dots')
let p7TSix = document.querySelector('.p7TSix')
let p7TFour = document.querySelector('.p7TFour')
let p7DotsC = 0;
let p7TSixC = 0;
let p7TFourC = 0;

let p7Six = document.querySelector('.p7Six')
let p7Four = document.querySelector('.p7Four')
p7Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p7RunC=p7RunC+6;
    sessionStorage.setItem('initp7RunC', p7RunC);
    p7run.innerHTML = p7RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p7TSixC++;
    p7TSix.innerHTML = p7TSixC;
    p7ballC++;
    sessionStorage.setItem('initp7ballC', p7ballC)
    p7Ball.innerHTML = p7ballC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p7two = document.querySelector('.p7two')
p7two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p7RunC=p7RunC+2;
    sessionStorage.setItem('initp7RunC', p7RunC);
    p7run.innerHTML = p7RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p7ballC++;
    sessionStorage.setItem('initp7ballC', p7ballC)
    p7Ball.innerHTML = p7ballC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p7Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p7RunC=p7RunC+4;
    sessionStorage.setItem('initp7RunC', p7RunC);
    p7run.innerHTML = p7RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p7TFourC++;
    p7TFour.innerHTML = p7TFourC;
    p7ballC++;
    sessionStorage.setItem('initp7ballC', p7ballC)
    p7Ball.innerHTML = p7ballC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p7RunMinus.addEventListener('click',function(){
    
    if(p7RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p7RunC--;
        sessionStorage.setItem('initp7RunC', p7RunC);
        p7run.innerHTML = p7RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p7run.innerHTML = p7RunC;


if (!sessionStorage.getItem('initp8RunC')) {
    sessionStorage.setItem('initp8RunC', '0');
  }
let p8RunC = Number(sessionStorage.getItem('initp8RunC'));


p8RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p8RunC++;
    sessionStorage.setItem('initp8RunC', p8RunC);
    p8run.innerHTML = p8RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p8ballC++;
    sessionStorage.setItem('initp8ballC', p8ballC)
    p8Ball.innerHTML = p8ballC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
let p8Dots = document.querySelector('.p8Dots')
let p8TSix = document.querySelector('.p8TSix')
let p8TFour = document.querySelector('.p8TFour')
let p8DotsC = 0;
let p8TSixC = 0;
let p8TFourC = 0;
let p8Six = document.querySelector('.p8Six')
let p8Four = document.querySelector('.p8Four')

p8Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p8RunC=p8RunC+6;
    sessionStorage.setItem('initp8RunC', p8RunC);
    p8run.innerHTML = p8RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p8TSixC++;
    p8TSix.innerHTML = p8TSixC;
    p8ballC++;
    sessionStorage.setItem('initp8ballC', p8ballC)
    p8Ball.innerHTML = p8ballC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p8two = document.querySelector('.p8two')
p8two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p8RunC=p8RunC+2;
    sessionStorage.setItem('initp8RunC', p8RunC);
    p8run.innerHTML = p8RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p8ballC++;
    sessionStorage.setItem('initp8ballC', p8ballC)
    p8Ball.innerHTML = p8ballC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p8Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p8RunC=p8RunC+4;
    sessionStorage.setItem('initp8RunC', p8RunC);
    p8run.innerHTML = p8RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p8TFourC++;
    p8TFour.innerHTML = p8TFourC;
    p8ballC++;
    sessionStorage.setItem('initp8ballC', p8ballC)
    p8Ball.innerHTML = p8ballC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p8RunMinus.addEventListener('click',function(){
    
    if(p8RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p8RunC--;
        sessionStorage.setItem('initp8RunC', p8RunC);
        p8run.innerHTML = p8RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p8run.innerHTML = p8RunC;

if (!sessionStorage.getItem('initp9RunC')) {
    sessionStorage.setItem('initp9RunC', '0');
  }
let p9RunC = Number(sessionStorage.getItem('initp9RunC'));

p9RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p9RunC++;
    sessionStorage.setItem('initp9RunC', p9RunC);
    p9run.innerHTML = p9RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p9ballC++;
    sessionStorage.setItem('initp9ballC', p9ballC)
    p9Ball.innerHTML = p9ballC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
let p9Dots = document.querySelector('.p9Dots')
let p9TSix = document.querySelector('.p9TSix')
let p9TFour = document.querySelector('.p9TFour')
let p9DotsC = 0;
let p9TSixC = 0;
let p9TFourC = 0;
let p9Six = document.querySelector('.p9Six')
let p9Four = document.querySelector('.p9Four')
p9Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p9RunC=p9RunC+6;
    sessionStorage.setItem('initp9RunC', p9RunC);
    p9run.innerHTML = p9RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p9TSixC++;
    p9TSix.innerHTML = p9TSixC;
    p9ballC++;
    sessionStorage.setItem('initp9ballC', p9ballC)
    p9Ball.innerHTML = p9ballC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p9two = document.querySelector('.p9two')
p9two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p9RunC=p9RunC+2;
    sessionStorage.setItem('initp9RunC', p9RunC);
    p9run.innerHTML = p9RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p9ballC++;
    sessionStorage.setItem('initp9ballC', p9ballC)
    p9Ball.innerHTML = p9ballC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p9Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p9RunC=p9RunC+4;
    sessionStorage.setItem('initp9RunC', p9RunC);
    p9run.innerHTML = p9RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p9TFourC++;
    p9TFour.innerHTML =p9TFourC;
    p9ballC++;
    sessionStorage.setItem('initp9ballC', p9ballC)
    p9Ball.innerHTML = p9ballC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p9RunMinus.addEventListener('click',function(){
    if(p9RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p9RunC--;
        sessionStorage.setItem('initp9RunC', p9RunC);
        p9run.innerHTML = p9RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p9run.innerHTML = p9RunC;

if (!sessionStorage.getItem('initp10RunC')) {
    sessionStorage.setItem('initp10RunC', '0');
  }
let p10RunC = Number(sessionStorage.getItem('initp10RunC'));

p10RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p10RunC++;
    sessionStorage.setItem('initp10RunC', p10RunC);
    p10run.innerHTML = p10RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p10ballC++;
    sessionStorage.setItem('initp10ballC', p10ballC)
    p10Ball.innerHTML = p10ballC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
let p10Dots = document.querySelector('.p10Dots')
let p10TSix = document.querySelector('.p10TSix')
let p10TFour = document.querySelector('.p10TFour')
let p10DotsC = 0;
let p10TSixC = 0;
let p10TFourC = 0;
let p10Six = document.querySelector('.p10Six')
let p10Four = document.querySelector('.p10Four')
p10Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p10RunC=p10RunC+6;
    sessionStorage.setItem('initp10RunC', p10RunC);
    p10run.innerHTML = p10RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p10TSixC++;
    p10TSix.innerHTML =p10TSixC
    p10ballC++;
    sessionStorage.setItem('initp10ballC', p10ballC)
    p10Ball.innerHTML = p10ballC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p10two = document.querySelector('.p10two')
p10two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p10RunC=p10RunC+2;
    sessionStorage.setItem('initp10RunC', p10RunC);
    p10run.innerHTML = p10RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p10ballC++;
    sessionStorage.setItem('initp10ballC', p10ballC)
    p10Ball.innerHTML = p10ballC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p10Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p10RunC=p10RunC+4;
    sessionStorage.setItem('initp10RunC', p10RunC);
    p10run.innerHTML = p10RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p10TFourC++;
    p10TFour.innerHTML = p10TFourC;
    p10ballC++;
    sessionStorage.setItem('initp10ballC', p10ballC)
    p10Ball.innerHTML = p10ballC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})

p10RunMinus.addEventListener('click',function(){
    
    if(p10RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p10RunC--;
        sessionStorage.setItem('initp10RunC', p10RunC);
        p10run.innerHTML = p10RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p10run.innerHTML = p10RunC;

if (!sessionStorage.getItem('initp11RunC')) {
    sessionStorage.setItem('initp11RunC', '0');
  }
let p11RunC = Number(sessionStorage.getItem('initp11RunC'));

p11RunPlus.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC++;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC++;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC++;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC++;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC++;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC++;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC++;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC++;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '1 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p11RunC++;
    sessionStorage.setItem('initp11RunC', p11RunC);
    p11run.innerHTML = p11RunC;
    runCounter++;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p11ballC++;
    sessionStorage.setItem('initp11ballC', p11ballC)
    p11Ball.innerHTML = p11ballC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 1;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }
})
let p11Dots = document.querySelector('.p11Dots')
let p11TSix = document.querySelector('.p11TSix')
let p11TFour = document.querySelector('.p11TFour')
let p11DotsC = 0;
let p11TSixC = 0;
let p11TFourC = 0;
let p11Six = document.querySelector('.p11Six')
let p11Four = document.querySelector('.p11Four')
p11Six.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=6;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=6;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=6;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=6;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=6;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=6;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=6;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=6;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '6 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p11RunC=p11RunC+6;
    sessionStorage.setItem('initp11RunC', p11RunC);
    p11run.innerHTML = p11RunC;
    runCounter+=6;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p11TSixC++;
    p11TSix.innerHTML =p11TSixC;
    p11ballC++;
    sessionStorage.setItem('initp11ballC', p11ballC)
    p11Ball.innerHTML = p11ballC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 6;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
let p11two = document.querySelector('.p11two')
p11two.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=2;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=2;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=2;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=2;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=2;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=2;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=2;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=2;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '2 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p11RunC=p11RunC+2;
    sessionStorage.setItem('initp11RunC', p11RunC);
    p11run.innerHTML = p11RunC;
    runCounter+=2;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p11ballC++;
    sessionStorage.setItem('initp11ballC', p11ballC)
    p11Ball.innerHTML = p11ballC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 2;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})
p11Four.addEventListener('click',function(){
    if(bl1runs.getAttribute('id')==='bl1Run'){
        bl1RunC+=4;
        bl1RunPlus1.innerHTML = bl1RunC;
    } if(bl2runs.getAttribute('id')==='bl2Run'){
        bl2RunC+=4;
        bl2RunPlus1.innerHTML = bl2RunC;
    } if(bl3runs.getAttribute('id')==='bl3Run'){
        bl3RunC+=4;
        bl3RunPlus1.innerHTML = bl3RunC;
    }  if(bl4runs.getAttribute('id')==='bl4Run'){
        bl4RunC+=4;
        bl4RunPlus1.innerHTML = bl4RunC;
    } if(bl5runs.getAttribute('id')==='bl5Run'){
        bl5RunC+=4;
        bl5RunPlus1.innerHTML = bl5RunC;
    } if(bl6runs.getAttribute('id')==='bl6Run'){
        bl6RunC+=4;
        bl6RunPlus1.innerHTML = bl6RunC;
    } if(bl7runs.getAttribute('id')==='bl7Run'){
        bl7RunC+=4;
        bl7RunPlus1.innerHTML = bl7RunC;
    }  if(bl8runs.getAttribute('id')==='bl8Run'){
        bl8RunC+=4;
        bl8RunPlus1.innerHTML = bl8RunC;
    }

    let sp = document.createElement('span')
    sp.innerHTML = '4 '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    p11RunC=p11RunC+4;
    sessionStorage.setItem('initp11RunC', p11RunC);
    p11run.innerHTML = p11RunC;
    runCounter+=4;
    sessionStorage.setItem('initTotalrun', runCounter);
    totalRun.innerHTML=runCounter;
    p11TFourC++;
    p11TFour.innerHTML= p11TFourC
    p11ballC++;
    sessionStorage.setItem('initp11ballC', p11ballC)
    p11Ball.innerHTML = p11ballC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
    if(needRuns.innerHTML>1){
        needRuns.innerHTML-= 4;
    }else{
        needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
        needToWin.style.color = 'red'
    }

})

p11RunMinus.addEventListener('click',function(){
    if(p11RunC>0){
        if(bl1runs.getAttribute('id')==='bl1Run'){
            bl1RunC--;
            bl1RunPlus1.innerHTML = bl1RunC;
        } if(bl2runs.getAttribute('id')==='bl2Run'){
            bl2RunC--;
            bl2RunPlus1.innerHTML = bl2RunC;
        } if(bl3runs.getAttribute('id')==='bl3Run'){
            bl3RunC--;
            bl3RunPlus1.innerHTML = bl3RunC;
        }  if(bl4runs.getAttribute('id')==='bl4Run'){
            bl4RunC--;
            bl4RunPlus1.innerHTML = bl4RunC;
        } if(bl5runs.getAttribute('id')==='bl5Run'){
            bl5RunC--;
            bl5RunPlus1.innerHTML = bl5RunC;
        } if(bl6runs.getAttribute('id')==='bl6Run'){
            bl6RunC--;
            bl6RunPlus1.innerHTML = bl6RunC;
        } if(bl7runs.getAttribute('id')==='bl7Run'){
            bl7RunC--;
            bl7RunPlus1.innerHTML = bl7RunC;
        }  if(bl8runs.getAttribute('id')==='bl8Run'){
            bl8RunC--;
            bl8RunPlus1.innerHTML = bl8RunC;
        }
        p11RunC--;
        sessionStorage.setItem('initp11RunC', p11RunC);
        p11run.innerHTML = p11RunC;
        runCounter--;
        sessionStorage.setItem('initTotalrun', runCounter);
        totalRun.innerHTML=runCounter;
        p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
        if(needRuns.innerHTML>1){
            needRuns.innerHTML++;
        }else{
            needToWin.innerHTML = `${scoreCard.innerHTML} won the match.`
            needToWin.style.color = 'red'
        }
    }
})
p11run.innerHTML = p11RunC;

let p1Sr = document.querySelector('.p1Sr')
let p2Sr = document.querySelector('.p2Sr')
let p3Sr = document.querySelector('.p3Sr')
let p4Sr = document.querySelector('.p4Sr')
let p5Sr = document.querySelector('.p5Sr')
let p6Sr = document.querySelector('.p6Sr')
let p7Sr = document.querySelector('.p7Sr')
let p8Sr = document.querySelector('.p8Sr')
let p9Sr = document.querySelector('.p9Sr')
let p10Sr = document.querySelector('.p10Sr')
let p11Sr = document.querySelector('.p11Sr')


// RunPlus Minus Button #End
// BallPlus Minus Button #start
if (!sessionStorage.getItem('initp1ballC')) {
    sessionStorage.setItem('initp1ballC', '0');
  }
let p1ballC = Number(sessionStorage.getItem('initp1ballC'));

p1BallPlus.addEventListener('click',function(){
    p1ballC++;
    sessionStorage.setItem('initp1ballC', p1ballC);
    p1DotsC++;
    p1Ball.innerHTML = p1ballC;
    p1Dots.innerHTML = p1DotsC;
    p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
    
})
p1Ball.innerHTML = p1ballC;

p1BallMinus.addEventListener('click',function(){
    if(p1ballC>0){
        p1ballC--;
        sessionStorage.setItem('initp1ballC', p1ballC);
        p1Ball.innerHTML = p1ballC;
        p1Sr.innerHTML = ((runC*100)/p1ballC).toFixed(1);
        // p1Dots.innerHTML = p1ballC;
    }
    
})

if (!sessionStorage.getItem('initp2ballC')) {
    sessionStorage.setItem('initp2ballC', '0');
  }
let p2ballC = Number(sessionStorage.getItem('initp2ballC'));

sessionStorage.setItem('initp2ballC', p2ballC);



p2BallPlus.addEventListener('click',function(){
    p2ballC++;
    sessionStorage.setItem('initp2ballC', p2ballC);
    p2DotsC++;
    p2Ball.innerHTML = p2ballC;
    p2Dots.innerHTML = p2DotsC;
    p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p2BallMinus.addEventListener('click',function(){
    if(p2ballC>0){
        p2ballC--;
        sessionStorage.setItem('initp2ballC', p2ballC);
        p2Ball.innerHTML = p2ballC;
        p2Sr.innerHTML = ((p2RunC*100)/p2ballC).toFixed(1);
        // p2Dots.innerHTML = p2ballC;
    }
})
p2Ball.innerHTML = p2ballC;

if (!sessionStorage.getItem('initp3ballC')) {
    sessionStorage.setItem('initp3ballC', '0');
  }
let p3ballC = Number(sessionStorage.getItem('initp3ballC'));



p3BallPlus.addEventListener('click',function(){
    p3ballC++;
    sessionStorage.setItem('initp3ballC', p3ballC);
    p3DotsC++;
    p3Ball.innerHTML = p3ballC;
    p3Dots.innerHTML = p3DotsC;
    p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p3BallMinus.addEventListener('click',function(){
    if(p3ballC>0){
        p3ballC--;
        sessionStorage.setItem('initp3ballC', p3ballC);
        p3Ball.innerHTML = p3ballC;
        p3Sr.innerHTML = ((p3RunC*100)/p3ballC).toFixed(1);
        // p3Dots.innerHTML = p3ballC;
    }
})
p3Ball.innerHTML = p3ballC;

if (!sessionStorage.getItem('initp4ballC')) {
    sessionStorage.setItem('initp4ballC', '0');
  }
let p4ballC = Number(sessionStorage.getItem('initp4ballC'));



p4BallPlus.addEventListener('click',function(){
    p4ballC++;
    p4DotsC++;
    sessionStorage.setItem('initp4ballC', p4ballC);
    p4Ball.innerHTML = p4ballC;
    p4Dots.innerHTML = p4DotsC;
    p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p4BallMinus.addEventListener('click',function(){
    if(p4ballC>0){

        p4ballC--;
        sessionStorage.setItem('initp4ballC', p4ballC);
        p4Ball.innerHTML = p4ballC;
        p4Sr.innerHTML = ((p4RunC*100)/p4ballC).toFixed(1);
        // p4Dots.innerHTML = p4ballC;
    }
})
p4Ball.innerHTML = p4ballC;
if (!sessionStorage.getItem('initp5ballC')) {
    sessionStorage.setItem('initp5ballC', '0');
  }
let p5ballC = Number(sessionStorage.getItem('initp5ballC'));


p5BallPlus.addEventListener('click',function(){
    p5ballC++;
    sessionStorage.setItem('initp5ballC', p5ballC);
    p5DotsC++;
    p5Ball.innerHTML = p5ballC;
    p5Dots.innerHTML = p5DotsC;
    p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p5BallMinus.addEventListener('click',function(){
    if(p5ballC>0){
        
        p5ballC--;
        sessionStorage.setItem('initp5ballC', p5ballC);
        p5Ball.innerHTML = p5ballC;
        p5Sr.innerHTML = ((p5RunC*100)/p5ballC).toFixed(1);
    }
})
p5Ball.innerHTML = p5ballC;

if (!sessionStorage.getItem('initp6ballC')) {
    sessionStorage.setItem('initp6ballC', '0');
  }
let p6ballC = Number(sessionStorage.getItem('initp6ballC'));


p6BallPlus.addEventListener('click',function(){
    p6ballC++;
    sessionStorage.setItem('initp6ballC', p6ballC);
    p6DotsC++;
    p6Ball.innerHTML = p6ballC;
    p6Dots.innerHTML = p6DotsC;
    p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p6BallMinus.addEventListener('click',function(){
    if(p6ballC>0){
        
        p6ballC--;
        sessionStorage.setItem('initp6ballC', p6ballC);
        p6Ball.innerHTML = p6ballC;
        p6Sr.innerHTML = ((p6RunC*100)/p6ballC).toFixed(1);
    }
})
p6Ball.innerHTML = p6ballC;

if (!sessionStorage.getItem('initp7ballC')) {
    sessionStorage.setItem('initp7ballC', '0');
  }
let p7ballC = Number(sessionStorage.getItem('initp7ballC'));



p7BallPlus.addEventListener('click',function(){
    p7ballC++;
    sessionStorage.setItem('initp7ballC', p7ballC);
    p7DotsC++;
    p7Ball.innerHTML = p7ballC;
    p7Dots.innerHTML = p7DotsC;
    p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p7BallMinus.addEventListener('click',function(){
    if(p7ballC>0){
        
        p7ballC--;
        sessionStorage.setItem('initp7ballC', p7ballC);
     
        p7Sr.innerHTML = ((p7RunC*100)/p7ballC).toFixed(1);
    }
})
p7Ball.innerHTML = p7ballC;
if (!sessionStorage.getItem('initp8ballC')) {
    sessionStorage.setItem('initp8ballC', '0');
  }
let p8ballC = Number(sessionStorage.getItem('initp8ballC'));


p8BallPlus.addEventListener('click',function(){
    p8ballC++;
    sessionStorage.setItem('initp8ballC', p8ballC);
    p8DotsC++;
    p8Ball.innerHTML = p8ballC;
    p8Dots.innerHTML = p8DotsC;
    p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p8BallMinus.addEventListener('click',function(){
    if(p8ballC>0){
        
        p8ballC--;
        sessionStorage.setItem('initp8ballC', p8ballC);
        p8Ball.innerHTML = p8ballC;
        p8Sr.innerHTML = ((p8RunC*100)/p8ballC).toFixed(1);
    }
})
p8Ball.innerHTML = p8ballC;

if (!sessionStorage.getItem('initp9ballC')) {
    sessionStorage.setItem('initp9ballC', '0');
  }
let p9ballC = Number(sessionStorage.getItem('initp9ballC'));


p9BallPlus.addEventListener('click',function(){
    p9ballC++;
    sessionStorage.setItem('initp9ballC', p9ballC);
    p9DotsC++;
    p9Ball.innerHTML = p9ballC;
    p9Dots.innerHTML = p9DotsC;
    p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p9BallMinus.addEventListener('click',function(){
    if(p9ballC>0){
        
        p9ballC--;
        sessionStorage.setItem('initp9ballC', p9ballC);
        p9Ball.innerHTML = p9ballC;
        p9Sr.innerHTML = ((p9RunC*100)/p9ballC).toFixed(1);
    }
})
p9Ball.innerHTML = p9ballC;
if (!sessionStorage.getItem('initp10ballC')) {
    sessionStorage.setItem('initp10ballC', '0');
  }
let p10ballC = Number(sessionStorage.getItem('initp10ballC'));


p10BallPlus.addEventListener('click',function(){
    p10ballC++;
    sessionStorage.setItem('initp10ballC', p10ballC);
    p10DotsC++;
    p10Ball.innerHTML = p10ballC;
    p10Dots.innerHTML = p10DotsC;
    p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p10BallMinus.addEventListener('click',function(){
    if(p10ballC>0){
        
        p10ballC--;
        sessionStorage.setItem('initp10ballC', p10ballC);
        p10Ball.innerHTML = p10ballC;
        p10Sr.innerHTML = ((p10RunC*100)/p10ballC).toFixed(1);
    }
})
p10Ball.innerHTML = p10ballC;
if (!sessionStorage.getItem('initp11ballC')) {
    sessionStorage.setItem('initp11ballC', '0');
  }
let p11ballC = Number(sessionStorage.getItem('initp11ballC'));


p11BallPlus.addEventListener('click',function(){
    p11ballC++;
    sessionStorage.setItem('initp11ballC', p11ballC);
    p11DotsC++;
    p11Ball.innerHTML = p11ballC;
    p11Dots.innerHTML = p11DotsC;
    p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);

    let sp = document.createElement('span')
    sp.innerHTML = '. '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
p11BallMinus.addEventListener('click',function(){
    if(p11ballC>0){
        
        p11ballC--;
        sessionStorage.setItem('initp11ballC', p11ballC);
        p11Ball.innerHTML = p11ballC;
        p11Sr.innerHTML = ((p11RunC*100)/p11ballC).toFixed(1);
    }
})
p11Ball.innerHTML = p11ballC;



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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;

    let sp = document.createElement('span')
    sp.innerHTML = '| '
    sp.style.fontWeight = 'bolder'
    sp.style.fontSize = '16px'
    sp.style.color = 'red'
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }


   }
})
bl1OverMinus.addEventListener('click',function(){
   if(bl1OverCounter>0){
    bl1OverCounter--;
    bl1over.innerHTML= bl1OverCounter;
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;
   }
})

let bl1RunC = 0;

bl1RunPlus.addEventListener('click',function(){
    if(bl1RunC>=0){
     bl1RunC++;
     bl1runs.innerHTML= bl1RunC
    }
 })
 bl1RunMinus.addEventListener('click',function(){
    if(bl1RunC>0){
     bl1RunC--;
     bl1runs.innerHTML= bl1RunC
    }
 })

 let bl1WicketC = 0;
bl1Wicket2.addEventListener('click',function(){
    if(bl1RunC>=0 && bl1WicketC>=0 && bl1WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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

/*================================================================================================================
                #blName1 and bowlers run start
==================================================================================================================*/ 
// Bowler-01
let p1Buttons = document.querySelector('.p1Buttons')
let p2Buttons = document.querySelector('.p2Buttons')
let p3Buttons = document.querySelector('.p3Buttons')
let p4Buttons = document.querySelector('.p4Buttons')
let p5Buttons = document.querySelector('.p5Buttons')
let p6Buttons = document.querySelector('.p6Buttons')
let p7Buttons = document.querySelector('.p7Buttons')
let p8Buttons = document.querySelector('.p8Buttons')

getId('deSelect').addEventListener('click', function(){
    
    blName6.style.background= 'none'
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    blName7.style.background= 'none'
    blName8.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    bl6runs.removeAttribute('id', 'bl6Run')
    bl7runs.removeAttribute('id', 'bl7Run')
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})

let bl1RunPlus1;
blName1.addEventListener('click', function(){
    blName1.style.background= '#9457EB33'
    bl1runs.setAttribute('id', 'bl1Run')
    let bl1Run = document.getElementById('bl1Run')
    bl1RunPlus1= bl1Run;
    console.log('first')
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    blName6.style.background= 'none'
    bl6runs.removeAttribute('id', 'bl6Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
    // bollwers buttons
    p1Buttons.style.display = 'inline'
    p2Buttons.style.display = 'none'
    p3Buttons.style.display = 'none'
    p4Buttons.style.display = 'none'
    p5Buttons.style.display = 'none'
    p6Buttons.style.display = 'none'
    p7Buttons.style.display = 'none'
    p8Buttons.style.display = 'none'
})



// Bowler-02
let bl2RunPlus1;
blName2.addEventListener('click', function(){
    blName2.style.background= '#9457EB33'
    bl2runs.setAttribute('id', 'bl2Run')
    let bl2Run = document.getElementById('bl2Run')
    bl2RunPlus1= bl2Run;
    console.log('Second')
    blName1.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    blName6.style.background= 'none'
    bl6runs.removeAttribute('id', 'bl6Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'inline'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})

// Bowler-3
let bl3RunPlus1;
blName3.addEventListener('click', function(){
    blName3.style.background= '#9457EB33'
    bl3runs.setAttribute('id', 'bl3Run')
    let bl3Run = document.getElementById('bl3Run')
    bl3RunPlus1= bl3Run;
    console.log('Third')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    blName6.style.background= 'none'
    bl6runs.removeAttribute('id', 'bl6Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'inline'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})

// Bowler-04
let bl4RunPlus1;
blName4.addEventListener('click', function(){
    blName4.style.background= '#9457EB33'
    bl4runs.setAttribute('id', 'bl4Run')
    let bl4Run = document.getElementById('bl4Run')
    bl4RunPlus1= bl4Run;
    console.log('Fourth')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName5.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    blName6.style.background= 'none'
    bl6runs.removeAttribute('id', 'bl6Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'inline'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})


// Bowler-05
let bl5RunPlus1;
blName5.addEventListener('click', function(){
    blName5.style.background= '#9457EB33'
    bl5runs.setAttribute('id', 'bl5Run')
    let bl5Run = document.getElementById('bl5Run')
    bl5RunPlus1= bl5Run;
    console.log('Fifth')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    blName6.style.background= 'none'
    bl6runs.removeAttribute('id', 'bl6Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'inline'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})
// Bowler-06
let bl6RunPlus1;
blName6.addEventListener('click', function(){
    blName6.style.background= '#9457EB33'
    bl6runs.setAttribute('id', 'bl6Run')
    let bl6Run = document.getElementById('bl6Run')
    bl6RunPlus1= bl6Run;
    console.log('Fifth')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    blName7.style.background= 'none'
    bl7runs.removeAttribute('id', 'bl7Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'inline'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'none'
})
// Bowler-07
let bl7RunPlus1;
blName7.addEventListener('click', function(){
    blName7.style.background= '#9457EB33'
    bl7runs.setAttribute('id', 'bl7Run')
    let bl7Run = document.getElementById('bl7Run')
    bl7RunPlus1= bl7Run;
    console.log('Fifth')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    blName6.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    bl6runs.removeAttribute('id', 'bl6Run')
    blName8.style.background= 'none'
    bl8runs.removeAttribute('id', 'bl8Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'inline'
     p8Buttons.style.display = 'none'
})
// Bowler-08
let bl8RunPlus1;
blName8.addEventListener('click', function(){
    blName8.style.background= '#9457EB33'
    bl8runs.setAttribute('id', 'bl8Run')
    let bl8Run = document.getElementById('bl8Run')
    bl8RunPlus1= bl8Run;
    console.log('Fifth')
    blName1.style.background= 'none'
    blName2.style.background= 'none'
    blName3.style.background= 'none'
    blName4.style.background= 'none'
    blName5.style.background= 'none'
    blName6.style.background= 'none'
    blName7.style.background= 'none'
    bl1runs.removeAttribute('id', 'bl1Run')
    bl2runs.removeAttribute('id', 'bl2Run')
    bl3runs.removeAttribute('id', 'bl3Run')
    bl4runs.removeAttribute('id', 'bl4Run')
    bl5runs.removeAttribute('id', 'bl5Run')
    bl6runs.removeAttribute('id', 'bl6Run')
    bl7runs.removeAttribute('id', 'bl7Run')
     // bollwers buttons
     p1Buttons.style.display = 'none'
     p2Buttons.style.display = 'none'
     p3Buttons.style.display = 'none'
     p4Buttons.style.display = 'none'
     p5Buttons.style.display = 'none'
     p6Buttons.style.display = 'none'
     p7Buttons.style.display = 'none'
     p8Buttons.style.display = 'inline'
})
/*================================================================================================================
                #blName1 and bowlers run End
==================================================================================================================*/ 
// blName1 and bowlers run End



let bl2OverCounter= 0;
bl2OverPlus.addEventListener('click',function(){
   if(bl2OverCounter>=0){
    bl2OverCounter++;
    bl2over.innerHTML= bl2OverCounter;
    // don't touc2
    overCounter++;
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;

    let sp = document.createElement('span')
    sp.innerHTML = '| '
    sp.style.fontWeight = 'bolder'
    sp.style.fontSize = '16px'
    sp.style.color = 'red'
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
   }
})
bl2OverMinus.addEventListener('click',function(){
   if(bl2OverCounter>0){
    bl2OverCounter--;
    bl2over.innerHTML= bl2OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;
   }
})

let bl2RunC = 0;
bl2RunPlus.addEventListener('click',function(){
    if(bl2RunC>=0){
     bl2RunC++;
     bl2runs.innerHTML= bl2RunC
    }
 })
 bl2RunMinus.addEventListener('click',function(){
    if(bl2RunC>0){
     bl2RunC--;
     bl2runs.innerHTML= bl2RunC
    }
 })

 let bl2WicketC = 0;

bl2Wicket2.addEventListener('click',function(){
    if(bl2WicketC>=0 && bl2WicketC>=0 && bl2WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;

    let sp = document.createElement('span')
    sp.innerHTML = '| '
    sp.style.fontWeight = 'bolder'
    sp.style.fontSize = '16px'
    sp.style.color = 'red'
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }

   }
})
bl3OverMinus.addEventListener('click',function(){
   if(bl3OverCounter>0){
    bl3OverCounter--;
    bl3over.innerHTML= bl3OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl3WicketC = 0;

bl3Wicket2.addEventListener('click',function(){
    if(bl3WicketC>=0 && bl3WicketC>=0 && bl3WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
    }else{
        bl4.innerHTML= blwer4.value; 
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
    sessionStorage.setItem('initOver', overCounter);
    totalOvar.innerHTML = overCounter;

    let sp = document.createElement('span')
    sp.innerHTML = '| '
    sp.style.fontWeight = 'bolder'
    sp.style.fontSize = '16px'
    sp.style.color = 'red'
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }

   }
})
bl4OverMinus.addEventListener('click',function(){
   if(bl4OverCounter>0){
    bl4OverCounter--;
    bl4over.innerHTML= bl4OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl4WicketC = 0;

bl4Wicket2.addEventListener('click',function(){
    if(bl4WicketC>=0 && bl4WicketC>=0 && bl4WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
     sessionStorage.setItem('initOver', overCounter);
     totalOvar.innerHTML = overCounter;

     let sp = document.createElement('span')
     sp.innerHTML = '| '
     sp.style.fontWeight = 'bolder'
     sp.style.fontSize = '16px'
     sp.style.color = 'red'
     if(lastTen.firstChild){
         lastTen.insertBefore(sp,lastTen.firstChild)
     }else{
         
         lastTen.appendChild(sp)
     }


    }
 })
bl5OverMinus.addEventListener('click',function(){
   if(bl5OverCounter>0){
    bl5OverCounter--;
    bl5over.innerHTML= bl5OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl5WicketC = 0;

bl5Wicket2.addEventListener('click',function(){
    if(bl5WicketC>=0 && bl5WicketC>=0 && bl5WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
     sessionStorage.setItem('initOver', overCounter);
     totalOvar.innerHTML = overCounter;

     let sp = document.createElement('span')
     sp.innerHTML = '| '
     sp.style.fontWeight = 'bolder'
     sp.style.fontSize = '16px'
     sp.style.color = 'red'
     if(lastTen.firstChild){
         lastTen.insertBefore(sp,lastTen.firstChild)
     }else{
         
         lastTen.appendChild(sp)
     }


    }
 })
bl6OverMinus.addEventListener('click',function(){
   if(bl6OverCounter>0){
    bl6OverCounter--;
    bl6over.innerHTML= bl6OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl6WicketC = 0;

bl6Wicket2.addEventListener('click',function(){
    if(bl6WicketC>=0 && bl6WicketC>=0 && bl6WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
     sessionStorage.setItem('initOver', overCounter);
     totalOvar.innerHTML = overCounter;

     let sp = document.createElement('span')
     sp.innerHTML = '| '
     sp.style.fontWeight = 'bolder'
     sp.style.fontSize = '16px'
     sp.style.color = 'red'
     if(lastTen.firstChild){
         lastTen.insertBefore(sp,lastTen.firstChild)
     }else{
         
         lastTen.appendChild(sp)
     }


    }
 })
bl7OverMinus.addEventListener('click',function(){
   if(bl7OverCounter>0){
    bl7OverCounter--;
    bl7over.innerHTML= bl7OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl7WicketC = 0;

bl7Wicket2.addEventListener('click',function(){
    if(bl7WicketC>=0 && bl7WicketC>=0 && bl7WicketC<10){
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
        err4.innerHTML='Bowler name at least 3 charactar long.'
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
     sessionStorage.setItem('initOver', overCounter);
     totalOvar.innerHTML = overCounter;

     let sp = document.createElement('span')
     sp.innerHTML = '| '
     sp.style.fontWeight = 'bolder'
     sp.style.fontSize = '16px'
     sp.style.color = 'red'
     if(lastTen.firstChild){
         lastTen.insertBefore(sp,lastTen.firstChild)
     }else{
         
         lastTen.appendChild(sp)
     }


    }
 })
bl8OverMinus.addEventListener('click',function(){
   if(bl8OverCounter>0){
    bl8OverCounter--;
    bl8over.innerHTML= bl8OverCounter;
    // dont touch
    overCounter--;
    sessionStorage.setItem('initOver', overCounter);
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

 
 let bl8WicketC = 0;

bl8Wicket2.addEventListener('click',function(){
    if(bl8WicketC>=0 && bl8WicketC>=0 && bl8WicketC<10){
        bl8WicketC++;
        bl8Wicket.innerHTML= bl8WicketC;
    }
 })
// Bowler9
// Bowler

/*=========================================================
            #Bwler part end
=========================================================*/

let lastBallMinus = document.querySelector('.lastBallMinus')
let plusSign = document.querySelector('.plusSign')

lastBallMinus.addEventListener('click',function(){
    if(lastTen.firstChild){
        lastTen.removeChild(lastTen.firstChild)
    }
})
plusSign.addEventListener('click',function(){
    let sp = document.createElement('span')
    sp.innerHTML = '+'
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})


if (sessionStorage.getItem('team1Input') && sessionStorage.getItem('team2Input') && sessionStorage.getItem('overLimit1') ) {
    
    team1Input.style.display = 'none'
    btnTeam1.style.display = 'none'
    
    let team2dis = sessionStorage.getItem('team2Input');
    let team1dis = sessionStorage.getItem('team1Input');
    // toss.style.display = 'block'

    let target2 = Number(sessionStorage.getItem('Targetv'));
    targetRuns.innerHTML =target2;
      
    team2.innerHTML = team2dis;
    team1.innerHTML = team1dis;
  
      let overCounter = Number(sessionStorage.getItem('initOver'));
    
    tossTeam2.innerHTML = team2dis;
    tossTeam1.innerHTML = team1dis;

    team2Input.style.display = 'none'
    btnTeam2.style.display = 'none'

    if (sessionStorage.getItem('initp1')) {
        player1.style.display= 'block'
        let b1dis = sessionStorage.getItem('initp1');
        p1.innerHTML = b1dis;
        btn1.style.display = 'none'
        b1.style.display = 'none';
        btn2.style.display = 'inline-block'
        b2.style.display = 'inline-block';
      }

    if (sessionStorage.getItem('initp2')) {
        player2.style.display= 'block'
        let b2dis = sessionStorage.getItem('initp2');
        p2.innerHTML = b2dis;
        btn2.style.display = 'none'
        b2.style.display = 'none';
        btn3.style.display = 'inline-block'
        b3.style.display = 'inline-block';
      }

    if (sessionStorage.getItem('initp3')) {
        player3.style.display= 'block'
        let b3dis = sessionStorage.getItem('initp3');
        p3.innerHTML = b3dis;
        btn3.style.display = 'none'
        b3.style.display = 'none';
        btn4.style.display = 'inline-block'
        b4.style.display = 'inline-block';
    }
    if (sessionStorage.getItem('initp4')) {
        player4.style.display= 'block'
        let b4dis = sessionStorage.getItem('initp4');
        p4.innerHTML = b4dis;
        btn4.style.display = 'none'
        b4.style.display = 'none';
        btn5.style.display = 'inline-block'
        b5.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp5')) {
        player5.style.display= 'block'
        let b5dis = sessionStorage.getItem('initp5');
        p5.innerHTML = b5dis;
        btn5.style.display = 'none'
        b5.style.display = 'none';
        btn6.style.display = 'inline-block'
        b6.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp6')) {
        player6.style.display= 'block'
        let b6dis = sessionStorage.getItem('initp6');
        p6.innerHTML = b6dis;
        btn6.style.display = 'none'
        b6.style.display = 'none';
        btn7.style.display = 'inline-block'
        b7.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp7')) {
        player7.style.display= 'block'
        let b7dis = sessionStorage.getItem('initp7');
        p7.innerHTML = b7dis;
        btn7.style.display = 'none'
        b7.style.display = 'none';
        btn8.style.display = 'inline-block'
        b8.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp8')) {
        player8.style.display= 'block'
        let b8dis = sessionStorage.getItem('initp8');
        p8.innerHTML = b8dis;
        btn8.style.display = 'none'
        b8.style.display = 'none';
        btn9.style.display = 'inline-block'
        b9.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp9')) {
        player9.style.display= 'block'
        let b9dis = sessionStorage.getItem('initp9');
        p9.innerHTML = b9dis;
        btn9.style.display = 'none'
        b9.style.display = 'none';
        btn10.style.display = 'inline-block'
        b10.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp10')) {
        player10.style.display= 'block'
        let b10dis = sessionStorage.getItem('initp10');
        p10.innerHTML = b10dis;
        btn10.style.display = 'none'
        b10.style.display = 'none';
        btn11.style.display = 'inline-block'
        b11.style.display = 'inline-block';
      }
      if (sessionStorage.getItem('initp11')) {
        player11.style.display= 'block'
        let b11dis = sessionStorage.getItem('initp11');
        p11.innerHTML = b11dis;
        btn11.style.display = 'none'
        b11.style.display = 'none';
        
      }
      if (sessionStorage.getItem('tossTeam1')) {
          let tt1 = sessionStorage.getItem('tossTeam1')
          scoreCard.innerHTML = tt1;
        
        
      }
      if (sessionStorage.getItem('tossTeam2')) {
          let tt2 = sessionStorage.getItem('tossTeam2')
          scoreCard.innerHTML = tt2;
        
        
      }

      if (sessionStorage.getItem('overLimit1')) {
        
       
        let overLimitt = Number(sessionStorage.getItem('overLimit1'))
        overLL.innerHTML= overLimitt;
      
      }
  
    overLimitPortion.style.display = 'none'
    scoreAndOver.style.display = 'block'
    batterOrBowler.style.display = 'flex'
    batsman.style.display = 'block'
    if(Number(targetRuns.innerHTML)>0){
        targetName.style.display = 'block'
        needToWin.style.display = 'block'
    }
    footer.style.display= 'none'
  }