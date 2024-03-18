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