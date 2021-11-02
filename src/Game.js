import ExpantaNum from 'Internal/ExpantaNum.js'
var number = new ExpantaNum(1)
function mainLoop(){
    updateHTML()
}
function updateHTML(){
    document.getElementById("number").innerHTML=`${number}`
}
window.setInterval(function(){
    mainLoop()
}, 10);