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
  

  
