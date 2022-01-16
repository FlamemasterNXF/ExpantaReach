function increase(i){
    data.number = data.number.plus(i)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    calculateResetStuff()
    calculateBulk()
    calculateSlowdownThings()
    calculateGain()
    increase(data.gain.times(diff))
    automate(bulkAmount.times(diff))
    finaleCheck()
    trueInfinityCheck()
    updateHTML()
}
function calculateGain(){
    if (!data.isSlowed)
    data.gain = effect.gte(1) ? new Decimal(2).pow(effect).pow(reset2Effect.plus(1)).pow(reset3Effect.plus(1)).pow(data.slowdownBoost) : new Decimal(2)
    else
        data.gain = new Decimal(2).pow(effect).pow(data.slowdownBoost).div(data.slowdownEffect)
}
function help(){
    data.number = new Decimal(100)
}
window.setInterval(function(){
    mainLoop()
}, 10);

function coolTimerThingy() {
  if (data.timesec == 60) {
    data.timesec = 0
    data.timemin += 1
  } else {
    data.timesec += 1
  }
  document.getElementById('timer1').innerHTML = data.timemin
  document.getElementById('timer2').innerHTML = data.timesec
}

setInterval(coolTimerThingy, 1000)
