let coinsub=[]
coinsub[0]=0
let _main=document.getElementsByTagName('main')[0]
let _time=document.querySelector('.time>span')
let i=0
let f=0
document.querySelector('.time>span').innerHTML
function _timee(){
    if(f>1){
        _end()
    }else{
        if(i>60){
        f++
        i=0
        _time.innerHTML='0'+f+':0'+i+''

    }else{
        if(i<10){
            _time.innerHTML='0'+f+':0'+i+''
        }else{
            _time.innerHTML='0'+f+':'+i+''
        }
        i++
    }
    }
}
let x=setInterval(_timee , 300)
function  _end(){           //end timer function.........
    clearInterval(x)
    clearInterval(ff)
    clearInterval(ss)
   _continuediv= document.createElement('div')
   _continuediv.setAttribute('class' , 'continue')
   _continuediv.innerHTML=`    <span class="continueicon" onclick="_continu()"><i class="bi bi-play-fill"></i></span> 
    <span class="spancontinue">Continue</span>
    <span class="hamesterimg"></span>`
    _main.appendChild(_continuediv)
    coinsub[1]=valuecoins
    coinsub[0]+=coinsub[1]
    coinsub[1]=0
    valuecoins=0
    _wiin.play()
    _audio.pause()
}
let timeimprove=0
function _continu(){                     //continue icon function...........
    i=0
    f=0
    timeimprove+=50
    x=setInterval(_timee , 300)
    ff=setInterval(removespan , 500)
    ss=setInterval( coinbombcreate , (1000-timeimprove))
    document.getElementsByClassName('continue')[0].remove()
    _audio.currentTime = 0;
    _audio.play()
}
//timer.............
let _audio=new Audio()
let _coinadio=new Audio()
let _bombadio=new Audio()
let _wiin=new Audio()
_audio.src='audo/Background Music (3).mp3'
_coinadio.src='audo/Coin Sound.mp3'
_bombadio.src='audo/Game-Over-Sound-Effect-4.mp3'
_wiin.src='audo/Victory.mp3'
_audio.addEventListener("canplaythrough", () => {
_audio.play().catch(e => {
  window.addEventListener('click', () => {
     _audio.play()
  }, { once: true })
})
});
document.getElementById('play').addEventListener(('click') , ()=>{         //music game ..........
document.getElementById('play').style.display='none'
    document.getElementById('muted').style.display='block'
    _audio.pause()
})
document.getElementById('muted').addEventListener(('click') , ()=>{
document.getElementById('play').style.display='block'
document.getElementById('muted').style.display='none'
    _audio.play()
})
//audio...................
const classname=['coin','bomb']
let lenclassname=classname.length
let _hamester =document.getElementById('hamester')
let _allspans =document.querySelectorAll('#hamester>span')
function rndd(min, max) {
var rand = min + Math.floor(Math.random() * (max - min));  //new random function created..........
return rand;
}
function coinbombcreate(){
let _span=document.createElement('span')
z=_hamester.getBoundingClientRect().left
let z2=((z+13)*100)/(window.innerWidth)
andis=rndd(0, lenclassname) 
_span.setAttribute('class' , ''+classname[andis]+'') //create new span bomb & coin............
if(_span.getAttribute('class')=='coin'){
    _span.style.top='25%'
    _span.setAttribute('onclick' , 'coinclick(this)')
}else if(_span.getAttribute('class')=='bomb'){
    _span.style.top='19%'
    _span.setAttribute('onclick' , 'bombclick(this)')
}
_span.style.left=''+z2+'%'
_hamester.appendChild(_span)
}
function removespan(){                //remove span on floor............
_allspans =document.querySelectorAll('#hamester>span')
m=_allspans.length
    for(n=0;n<m;n++){
    if(_allspans[n].getBoundingClientRect().top>=500){   
        _allspans[n].remove()
    } 
    }
}
ff=setInterval(removespan , 500)
ss=setInterval( coinbombcreate , 1000)
// ss=setInterval( coinbombcreate , 1500)
let valuecoins=0
function coinclick(v){                   //coin click...............
v.remove()
_coinadio.play()
valuecoins++
coinsub[1]=valuecoins+coinsub[0]
document.getElementById('valcoins').innerHTML=coinsub[1]
document.querySelector('.time>div>span:nth-of-type(2)').classList.add('coinIncrease')
setTimeout(()=>{
    document.querySelector('.time>div>span:nth-of-type(2)').classList.remove('coinIncrease')
} , 1000)
}
function bombclick(v){                   //bomb click..................
_allspans =document.querySelectorAll('#hamester>span')
for(n=0;n<_allspans.length;n++){
        _allspans[n].remove()
    }
v.remove()
_bombadio.play()
clearInterval(x)
clearInterval(ff)
clearInterval(ss)
_refreshdiv= document.createElement('div')
_refreshdiv.setAttribute('class' , 'refresh')
_refreshdiv.innerHTML=` <span class="refreshicon" onclick="_refresh()"><i class="bi bi-arrow-clockwise"></i></span>
    <span class="spanrefresh">Refresh</span>
    <span class="hamesterimg"></span>`
 _main.appendChild(_refreshdiv)
 _audio.pause()

}
function _refresh(){
i=0
f=0
x=setInterval(_timee , 300)
ff=setInterval(removespan , 500)
ss=setInterval( coinbombcreate , (1000-timeimprove))
document.getElementsByClassName('refresh')[0].remove()
document.getElementById('valcoins').innerHTML=coinsub[0]
valuecoins=0
_audio.currentTime = 0;
_audio.play()
}