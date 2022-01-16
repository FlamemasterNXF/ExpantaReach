let resetReq = [new Decimal(100).pow(data.resets[0].plus(1)),new Decimal(100).pow(data.resets[1].plus(1)),new Decimal(100).pow(data.resets[2].plus(1)), new Decimal(1), new Decimal(1)]
let effect = new Decimal(10).times(data.resets[0])
let reset2Effect = new Decimal(1)
let reset3Effect = new Decimal(1)
let reset4Effect = new Decimal(1)
let reset5Effect = new Decimal(1)
function reset(){
    if (data.number.gte(resetReq[0])){
        data.number = data.number.sub(resetReq[0])
        data.resets[0] = data.resets[0].plus(1)
    }
}
function resetNew(x){
    if (data.number.gte(resetReq[x])){
        if (x===1) data.resets[0] = new Decimal(0)
        if (x===2){
            data.resets[0] = new Decimal(0)
            data.resets[1] = new Decimal(0)
        }
        if (x===3){
            data.resets[0] = new Decimal(0)
            data.resets[1] = new Decimal(0)
            data.resets[2] = new Decimal(0)
        }
        if (x===4){
            data.resets[0] = new Decimal(0)
            data.resets[1] = new Decimal(0)
            data.resets[2] = new Decimal(0)
            data.resets[3] = new Decimal(0)
        }
        data.number = data.number.sub(resetReq[x])
        data.resets[x] = data.resets[x].plus(1)
    }
}
function calculateResetStuff(){
    for (let i=0;i<data.resets.length;i++){
        resetReq[0] = data.resets[0].gte(10) ? new Decimal(100).pow(data.resets[0].plus(1).times(1e6)):data.resets[0].gte(5) ? new Decimal(100).pow(data.resets[0].plus(1).times(100)) : new Decimal(100).pow(data.resets[0].plus(1))
        resetReq[1] = new Decimal("1e1e10").pow(data.resets[1].plus(1))
        resetReq[2] = new Decimal("1e1e12").pow(data.resets[2].plus(1))
        resetReq[3] = new Decimal("1e1e308").pow(data.resets[3].plus(1))
        resetReq[4] = new Decimal("1ee1e308").pow(data.resets[4].plus(1))
    }
    effect = new Decimal(10).times(data.resets[0]).pow(reset4Effect.plus(1))
    reset2Effect = new Decimal(100).times(data.resets[1]).pow(reset4Effect.plus(1))
    reset3Effect = new Decimal(1000).times(data.resets[2]).pow(reset4Effect.plus(1))
    reset4Effect = new Decimal(2).times(data.resets[3])
    reset5Effect = data.trueInfinity?new Decimal(10).times(data.resets[4]).pow(reset4Effect.plus(1)):new Decimal(10).times(data.resets[4])
}
function changeAutomation(){
    if (data.resets[0].gte(50))data.automated = true
}
function changeAutomation2(){
    if (data.resets[1].gte(50))data.automatedDos = true
}
function changeAutomation3(){
    if (data.resets[3].gte(50))data.automatedFinal = true
}
function changeAutomation4(){
    if (data.resets[4].gte(50))data.automatedFinalReal = true
}
function automate(i){
    if (data.automated){
        if (data.number.gte(resetReq[0])){
            data.resets[0] = data.resets[0].plus(i)
        }
    }
    if (data.automatedDos){
        if (data.number.gte(resetReq[1])){
            data.resets[1] = data.resets[1].plus(i)
        }
        if (data.number.gte(resetReq[2])){
            data.resets[2] = data.resets[2].plus(i)
        }
    }
    if (data.automatedFinal){
        if (data.number.gte(resetReq[3])){
            data.resets[3] = data.resets[3].plus(i)
        }
    }
    if (data.automatedFinalReal){
        if (data.number.gte(resetReq[4])){
            data.resets[4] = data.resets[4].plus(i)
        }
    }
}