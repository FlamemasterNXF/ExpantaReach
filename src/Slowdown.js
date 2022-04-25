let slowdownBoostNew = new Decimal(1)
function slowdown(){
    data.endedJ?data.trueSlow=true:data.isSlowed=true
    if(!data.endedJ)data.number = new Decimal(1)
    if(data.endedJ){
        data.number = new Decimal("1e308")
        data.resets[0] = new Decimal(0)
    }
}
function exitSlowdown(){
    if(!data.endedJ){
        data.isSlowed = false
        if (slowdownBoostNew.gte(data.slowdownBoost)) data.slowdownBoost = new Decimal(slowdownBoostNew)
    }
}
function calculateSlowdownThings(){
    if(!data.endedJ){
        slowdownBoostNew = data.slowdownBoost.gte(76000)? new Decimal(data.number.log(1e10)):data.slowdownBoost.gte(100) ? new Decimal(data.number.log(2e6)) : new Decimal(data.number.log(20))
        if (slowdownBoostNew.gte(2e6)) slowdownBoostNew = new Decimal(2e6)
        data.slowdownEffect = new Decimal(2).plus(data.number.log(10))
    }
}