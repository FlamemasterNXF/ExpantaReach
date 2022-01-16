function infinity() {
    data.number = new Decimal(1)
    data.gain = new Decimal(2)
    data.resets[0] = new Decimal(0)
    data.isSlowed = false
    data.slowdownBoost = new Decimal(1)
    data.automated = false
    data.infinities = data.infinities.plus(1)
}

function trueInfinityCheck() {
    const all = document.getElementById("mainPageContainer")
    const ti = document.getElementById("trueInfinity")
    if (data.number.mag >= 1 && data.number.sign >= 1 && data.number.layer >= 100 && !data.trueInfinity) {
        all.style.display = `none`
        ti.style.display = `flex`
    }
}

function ti() {
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
    data.trueInfinity = true
    const all = document.getElementById("mainPageContainer")
    const ti = document.getElementById("trueInfinity")
    all.style.display = `flex`
    ti.style.display = `none`
}