let bulkAmount = new Decimal(1000)
let totalResets = new Decimal(0)
function finaleCheck(){
    const all = document.getElementById("mainPageContainer")
    const finale = document.getElementById("finaleContainer")
    if (!data.finale&&data.infinities.gt(0) && data.number.gte("1e1e26")){
        all.style.display = `none`
        finale.style.display = `flex`
    }
}
function buyFinale(){
    const all = document.getElementById("mainPageContainer")
    const finale = document.getElementById("finaleContainer")
    if (data.infinities.gte(1)) data.finale = true
    all.style.display = `flex`
    finale.style.display = `none`
}
function calculateBulk(){
    totalResets = new Decimal(data.resets[0].plus(data.resets[1]).plus(data.resets[2]).plus(data.resets[3]).plus(data.resets[4]))
    data.finale?bulkAmount=new Decimal(1000).plus(totalResets).pow(reset5Effect.plus(1)):bulkAmount=new Decimal(1000)
}
