if (!sessionStorage.getItem('initp11')) {
    sessionStorage.setItem('initp11', b11.value);
    player11.style.display= 'block'
  }
  
let b11dis = sessionStorage.getItem('initp11');
p11.innerHTML = b11dis;