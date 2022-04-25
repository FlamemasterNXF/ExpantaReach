function increase(i){
    data.number = data.number.plus(i)
}
function increaseJ(i){
    data.jShards = data.jShards.plus(i)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    calculateResetStuff()
    calculateBulk()
    calculateSlowdownThings()
    calculateGain()
    calcJThings()
    if (!data.trueSlow) increase(data.gain.times(diff))
    if (data.confirmedJ) increaseJ(data.jGain.times(diff))
    if (!data.trueSlow) automate(bulkAmount.times(diff))
    jAuto(diff)
    finaleCheck()
    trueInfinityCheck()
    updateHTML()
    if(data.trueSlow && data.number.gt(1)) data.number = data.number.div(1.1)
    if(data.trueSlow && data.number.lt(1)) data.number = new Decimal(1)
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
  if (data.timems >= 99) {
    if (data.timesec >= 59) {
      data.timemin += 1;
      data.timesec = 0;
      data.timems = 0;
    } else {
      data.timesec += 1
      data.timems = 0;
    }
  } else {
    data.timems += 1;
  }
  document.getElementById("timer1").innerHTML = data.timemin;
  document.getElementById("timer2").innerHTML = data.timesec;
  document.getElementById("timer3").innerHTML = data.timems;
}

setInterval(coolTimerThingy, 10);
