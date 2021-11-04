let slowdownBoostNew = new Decimal(1)
function slowdown(){
    data.isSlowed = true
    data.number = new Decimal(1)
}
function exitSlowdown(){
    data.isSlowed = false
    if (slowdownBoostNew.gte(data.slowdownBoost)) data.slowdownBoost = new Decimal(slowdownBoostNew)
}
function calculateSlowdownThings(){
    slowdownBoostNew = data.slowdownBoost.gte(76000)? new Decimal(data.number.log(1e10)):data.slowdownBoost.gte(100) ? new Decimal(data.number.log(2e6)) : new Decimal(data.number.log(20))
    if (slowdownBoostNew.gte(2e6)) slowdownBoostNew = new Decimal(2e6)
    data.slowdownEffect = new Decimal(2).plus(data.number.log(10))
}