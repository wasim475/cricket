if (!sessionStorage.getItem('initp11ballC')) {
    sessionStorage.setItem('initp11ballC', '0');
  }
let p11ballC = Number(sessionStorage.getItem('initp11ballC'));

sessionStorage.setItem('initp11ballC', p11ballC);