function increase(i){
    data.number = data.number.plus(i)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    calculateResetStuff()
    calculateSlowdownThings()
    calculateGain()
    increase(data.gain.times(diff))
    automate(new Decimal(1000).times(diff))
    calculatePercent()
    updateHTML()
}
function calculateGain(){
    if (!data.isSlowed)
    data.gain = effect.gte(1) ? new Decimal(2).pow(effect).pow(data.slowdownBoost) : new Decimal(2)
    else
        data.gain = new Decimal(2).pow(effect).pow(data.slowdownBoost).div(data.slowdownEffect)
}
function help(){
    data.number = new Decimal(100)
}
window.setInterval(function(){
    mainLoop()
}, 10);