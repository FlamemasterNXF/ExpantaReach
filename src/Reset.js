let resetReq = new Decimal(100).pow(data.resets[0].plus(1))
let effect = new Decimal(10).times(data.resets[0])
function reset(){
    if (data.number.gte(resetReq)){
        data.number = data.number.sub(resetReq)
        data.resets[0] = data.resets[0].plus(1)
    }
}
function calculateResetStuff(){
    resetReq =
        data.resets[0].gte(10) ? new Decimal(100).pow(data.resets[0].plus(1).times(1e6)) :data.resets[0].gte(5) ? new Decimal(100).pow(data.resets[0].plus(1).times(100)) : new Decimal(100).pow(data.resets[0].plus(1))
    effect = new Decimal(10).times(data.resets[0])
}
function changeAutomation(){
    if (!data.isInfinite)
    data.automated ? data.automated = false : data.automated = true
}
function automate(i){
    if (data.automated){
        if (data.number.gte(resetReq)){
            data.resets[0] = data.resets[0].plus(i)
        }
    }
}