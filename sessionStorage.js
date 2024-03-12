// Initialize 'initrun' in sessionStorage
if (!sessionStorage.getItem('initrun')) {
    sessionStorage.setItem('initrun', '0');
  }
  
  let runCounter = Number(sessionStorage.getItem('initrun'));
  
  
  let increment = () => {
    runCounter++;
    sessionStorage.setItem('initrun', runCounter);
    run.innerHTML = runCounter;
  };



  if (!sessionStorage.getItem('initp11RunC')) {
    sessionStorage.setItem('initp11RunC', '0');
  }
let p11RunC = Number(sessionStorage.getItem('initp11RunC'));

  sessionStorage.setItem('initp11RunC', p11RunC);

//   UserInput

if (!sessionStorage.getItem('initp3')) {
    sessionStorage.setItem('initp3', b3.value);
    player3.style.display= 'block'
  }
  
let b3dis = sessionStorage.getItem('initp3');
p3.innerHTML = b3dis;

  

  
