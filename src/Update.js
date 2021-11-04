function updateHTML(){
    document.getElementById("number").innerHTML=`Your Number is ${format(data.number)} [+${format(data.gain)}/s]`
    document.getElementById("reset1").innerHTML=
        `Reset your Number but raise your Number gain to the 10th power<br>Requires: ${format(resetReq)} Number<br>You have Reset ${formatWhole(data.resets[0])} Times [^${formatWhole(data.resets[0].times(10))}]`
    document.getElementById("automation").innerHTML = data.resets[0].gte(50) ? data.automated ? `Automate Resetting<br>Currently: [ON]` : `Automate Resetting<br>Currently: [OFF]` : `Automate Resetting<br>Requires 50 Resets`
    document.getElementById("scaling").innerHTML =
        data.resets[0].gte(10) ? `Current Reset Requirement Scaling: [gwa Scaling]`:data.resets[0].gte(5) ? `Current Reset Requirement Scaling: [Flame Scaling]` : `Current Reset Requirement Scaling: [None]`
    document.getElementById("scaling2").innerHTML =
        data.slowdownBoost.gte(2e6) ? `Current Boost Gain Scaling: [CAPPED]`:data.slowdownBoost.gte(76000) ? `Current Boost Gain Scaling: [gwa Scaling]`:data.slowdownBoost.gte(100) ? `Current Boost Gain Scaling: [Flame Scaling]` : `Current Boost Gain Scaling: [None]`
    document.getElementById("slowdown").innerHTML = data.isSlowed ?
        `The power of the Slowdown currently divides your Number Gain by ${format(data.slowdownEffect)} (increases over time)<br>If you exit now your Slowdown Power will be ^${format(slowdownBoostNew)}`
        : `Slowdown Time<br>Based on how high your Number gets while time is slowed you will gain a boost to Number Gain when you return to normal<br>Current Boost: ^${format(data.slowdownBoost)} (applied AFTER Reset boost!)`
    document.getElementById("infinityTube").innerHTML = data.isInfinite ?
        `You need a Number of e1e308 for a Infinity<br>Your Number's second exponent is ${format(percent)}% of the requirement for a Infinity` : `Enter the Infinity Tube<br>This will force Automation to be on, but give you the chance to get a Infinity`
    showAndHideStuff()
}
function showAndHideStuff(){
    let all = document.getElementById("mainPageContainer")
    all.style.display = !data.canGetInfinity ? 'flex' : 'none'
    let gwasmith = document.getElementById("gwasmithContainer")
    gwasmith.style.display = data.canGetInfinity ? 'flex' :'none'
    let slowdown = document.getElementById("slowdown")
    let slowdownText = document.getElementById("scaling2")
    slowdown.style.display = data.resets[0].gte(5) ? 'flex' : 'none'
    slowdownText.style.display = data.resets[0].gte(5) ? 'flex' : 'none'
    let infinityTube = document.getElementById("infinityTube")
    infinityTube.style.display = data.number.gte("e1e10") ? 'flex' : 'none'
}