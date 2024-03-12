if (sessionStorage.getItem('initp5')) {
    player5.style.display= 'block'
    let b5dis = sessionStorage.getItem('initp5');
    p5.innerHTML = b5dis;
    btn5.style.display = 'none'
    b5.style.display = 'none';
    btn6.style.display = 'inline-block'
    b6.style.display = 'inline-block';
  }