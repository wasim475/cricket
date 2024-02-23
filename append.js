let lastTen = document.getElementById('lastTen')
let wide = document.getElementById('wide')
let NoBall = document.getElementById('NoBall')


wide.addEventListener('click',function(){
    let sp = document.createElement('span')
    sp.innerHTML = 'wd '
    lastTen.appendChild(sp)

    console.log(sp)
})
NoBall.addEventListener('click',function(){
    let sp = document.createElement('span')
    sp.innerHTML = 'nb '
    if(lastTen.firstChild){
        lastTen.insertBefore(sp,lastTen.firstChild)
    }else{
        
        lastTen.appendChild(sp)
    }
})
