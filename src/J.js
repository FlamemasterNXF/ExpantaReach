function j() {
    for (let i = 0; i < data.resets.length; i++) {
        data.resets[i] = new Decimal(0)
    }
    data.number = new Decimal(1)
    data.gain = new Decimal(2)
    data.isSlowed = false
    data.slowdownEffect = new Decimal(2)
    data.slowdownBoost = new Decimal(1)
    data.automated = false
    data.automatedDos = false
    data.automatedFinal = false
    data.automatedFinalReal = false
    data.infinities = new Decimal(0)
    data.finale = false
    data.trueInfinity = false
    data.confirmedJ = true

}
function doJReset(i){
    if(data.jShards.gte(data.jResetCosts[i])){
        data.jShards = new Decimal(0)
        data.jResets[i] = data.jResets[i].plus(1)
    }
    if(i===1) data.jSplits = data.jSplits.plus(1)
}
function calcJThings(){
    data.jGain = data.jResets[0].gte(1)?((data.jResets[0]).times(2)).pow(data.jSplits.plus(1)):new Decimal(0)
    data.jResetCosts[0] = (data.jResets[0].plus(1)).times(100)
    data.jResetCosts[1] = new Decimal(50).pow(data.jResets[1].plus(1))
}
function jAutoToggle(){
    if(data.jSplits.gte(50)) data.jAuto = true
}
function jAuto(i){
    if(data.jAuto){
        data.jResets[0] = data.jResets[0].plus(i)
        data.jResets[1] = data.jResets[1].plus(i)
        data.jSplits = data.jResets[1]
    }
}
function jEnd(){
    for (let i = 0; i < data.resets.length; i++) {
        data.resets[i] = new Decimal("1F6900")
    }
    data.number = new Decimal("1F6900")
    data.gain = new Decimal(2)
    data.isSlowed = false
    data.slowdownEffect = new Decimal(2)
    data.slowdownBoost = new Decimal(2e6)
    data.automated = true
    data.automatedDos = true
    data.automatedFinal = true
    data.automatedFinalReal = true
    data.infinities = new Decimal(1)
    data.finale = true
    data.trueInfinity = true
    data.confirmedJ = false
    data.endedJ = true
    data.trueSlow = false
}