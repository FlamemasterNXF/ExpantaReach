function updateHTML(){
    // region pre-J
    document.getElementById("number").innerHTML=`Your Number is ${format(data.number)} [+${format(data.gain)}/s]`
    document.getElementById("reset1").innerHTML=
        `Reset your Number but raise your Number gain to the 10th power<br>Requires: ${format(resetReq[0])} Number<br>You have Reset ${formatWhole(data.resets[0])} Times [^${formatWhole(data.resets[0].times(10))}]`
    document.getElementById("reset2").innerHTML =
        `Reset your Number but raise your Number gain to the 100th power<br>Requires: ${format(resetReq[1])} Number<br>You have Reset ${formatWhole(data.resets[1])} Times [^${format(reset2Effect)}]`
    document.getElementById("reset3").innerHTML =
        `Reset your Number, Reset 1, and Reset 2 but raise your Number gain to the 1000th power<br>Requires: ${format(resetReq[2])} Number<br>You have Reset ${formatWhole(data.resets[2])} Times [^${format(reset3Effect)}]`
    document.getElementById("reset4").innerHTML =
        `Reset your Number and all previous Resets but raise all previous Reset effects to the 2nd power<br>Requires: ${format(resetReq[3])} Number<br>You have Reset ${formatWhole(data.resets[3])} Times [^${format(reset4Effect)}]`
    document.getElementById("reset5").innerHTML =
        `Reset your Number and all previous Resets but raise bulk amount to the 10th power<br>Requires: ${format(resetReq[4])} Number<br>You have Reset ${formatWhole(data.resets[4])} Times [^${format(reset5Effect)}]`
    document.getElementById("automation").innerHTML = data.resets[0].gte(50) ? data.automated ? `Automate Resetting<br>Currently: [ON]` : `Automate Resetting<br>Currently: [OFF]` : `Automate Resetting<br>Requires 50 Resets`
    document.getElementById("automation2").innerHTML = data.resets[1].gte(50) ? data.automatedDos ? `Automate Resets 2 and 3<br>Currently: [ON]` : `Automate Resets 2 and 3<br>Currently: [OFF]` : `Automate Resets 2 and 3<br>Requires 50 Reset 2s`
    document.getElementById("automation3").innerHTML = data.resets[3].gte(50) ? data.automatedFinal ? `Automate Reset 4<br>Currently: [ON]` : `Automate Reset 4<br>Currently: [OFF]` : `Automate Reset 4<br>Requires 50 Reset 4s`
    document.getElementById("automation4").innerHTML = data.resets[4].gte(50) ? data.automatedFinalReal ? `Automate Reset 5<br>Currently: [ON]` : `Automate Reset 5<br>Currently: [OFF]` : `Automate Reset 5<br>Requires 50 Reset 5s`
    document.getElementById("scaling").innerHTML =
        data.resets[0].gte(10) ? `Current Reset Requirement Scaling: [gwa Scaling]`:data.resets[0].gte(5) ? `Current Reset Requirement Scaling: [Flame Scaling]` : `Current Reset Requirement Scaling: [None]`
    document.getElementById("scaling2").innerHTML =
        data.endedJ ?`<br>??????`:data.slowdownBoost.gte(2e6) ? `<br>Current Boost Gain Scaling: [CAPPED]`:data.slowdownBoost.gte(76000) ? `Current Boost Gain Scaling: [gwa Scaling]`:data.slowdownBoost.gte(100) ? `Current Boost Gain Scaling: [Flame Scaling]` : `Current Boost Gain Scaling: [None]`
    document.getElementById("slowdown").innerHTML = data.endedJ?`SLOWDOWN THE ETERNITY`:data.isSlowed ?
        `The power of the Slowdown currently divides your Number Gain by ${format(data.slowdownEffect)} (increases over time)<br>If you exit now your Slowdown Power will be ^${format(slowdownBoostNew)}`
        : `Slowdown Time<br>Based on how high your Number gets while time is slowed you will gain a boost to Number Gain when you return to normal<br>Current Boost: ^${format(data.slowdownBoost)} (applied AFTER Reset boost!)`
    document.getElementById("infinityTube").innerHTML =
        `Enter the Infinity Tube...<br>This will change some things...`
    document.getElementById("tiCheck").innerText = data.trueSlow?`It's finally over`:data.endedJ?"ENTER THE SLOWDOWN AND END THIS":"You have entered the True Infinity. (Reset 5 is effected by Reset 4's effect)"
    if(data.endedJ) document.getElementById("tiCheck").style.color = `red`
    //endregion
    document.getElementById("jAmt").innerHTML = data.jSplits.gte(2)?`YOU HAVEN'T ${format(data.jShards)} J/${format(data.jSplits)}`:`YOU HAVE ${format(data.jShards)} J`
    document.getElementById("jGen").innerHTML = `J<br>Cost: ${format(data.jResetCosts[0])} J<br>Reset but increase J production by JJ`
    document.getElementById("jGen2").innerHTML = `J<br>Too slow.<br>Split your J into ${format(data.jSplits.plus(1))}<br>Requires ${format(data.jResetCosts[1])}`
    showAndHideStuff()
}
function showAndHideStuff(){
    let gwasmith = document.getElementById("gwasmithContainer")
    gwasmith.style.display = data.infinities.gte(2) ? 'flex' :'none'
    if(data.endedJ){
        const main = document.getElementById("mainPageContainer")
        main.style.display = `flex`
        let slowdown = document.getElementById("slowdown")
        let slowdownText = document.getElementById("scaling2")
        slowdown.style.display = data.number.gt(1)? 'flex' : 'none'
        slowdownText.style.display = data.number.gt(1) ? 'flex' : 'none'
        let infinityTube = document.getElementById("infinityTube")
        infinityTube.style.display = data.number.gte("e1e11") && data.infinities.lt(1)? 'flex' : 'none'
        let reset2 = document.getElementById("reset2")
        let reset3 = document.getElementById("reset3")
        let automation2 = document.getElementById("automation2")
        reset2.style.display = data.trueSlow?`none`:`flex`
        reset3.style.display = data.trueSlow?`none`:`flex`
        automation2.style.display = `none`
        let auto3 = document.getElementById("automation3")
        let reset4 = document.getElementById("reset4")
        let auto4 = document.getElementById("automation4")
        let reset5 = document.getElementById("reset5")
        auto3.style.display = `none`
        auto4.style.display = `none`
        reset4.style.display = data.trueSlow?`none`:`flex`
        reset5.style.display = data.trueSlow?`none`:`flex`
        let ti = document.getElementById("tiCheck")
        ti.style.display = data.number.gt(1)?`flex`:`none`
        const jPage = document.getElementById("jPageContainer")
        jPage.style.display = `none`
        const jSplit = document.getElementById("jGen2")
        jSplit.style.display = `none`
        const jEnd = document.getElementById("jEnd")
        jEnd.style.display = `none`
        const savestuff = document.getElementById("savestuffcontain")
        savestuff.style.display = `none`
        const auto = document.getElementById("automation")
        auto.style.display = data.number.gt(1)?`flex`:`none`
        const scalingtext = document.getElementById("scaling")
        scalingtext.style.display = data.number.gt(1)?`flex`:`none`
        const trueEnding = document.getElementById("trueTrueFinale")
        trueEnding.style.display = data.number.eq(1)?'flex':`none`
    }
    else if (data.confirmedJ){
        const all = document.getElementById("mainPageContainer")
        const jEnter = document.getElementById("theJAnnounce")
        const j = document.getElementById("jPageContainer")
        all.style.display = `none`
        jEnter.style.display = data.confirmedJ?`none`:`flex`
        j.style.display = data.confirmedJ?`flex`:`none`
        const jSplit = document.getElementById("jGen2")
        jSplit.style.display = data.jResets[0].gte(1)&&data.jShards.gte(50)?`flex`:`none`
        const jAuto = document.getElementById("jAuto")
        jAuto.style.display = data.jSplits.gte(1)?'flex':'none'
        const jEnd = document.getElementById("jEnd")
        jEnd.style.display = data.jShards.gte(1.79e308)?`flex`:`none`
    }
    else {
        let slowdown = document.getElementById("slowdown")
        let slowdownText = document.getElementById("scaling2")
        slowdown.style.display = data.resets[0].gte(5) ? 'flex' : 'none'
        slowdownText.style.display = data.resets[0].gte(5) ? 'flex' : 'none'
        let infinityTube = document.getElementById("infinityTube")
        infinityTube.style.display = data.number.gte("e1e11") && data.infinities.lt(1)? 'flex' : 'none'
        let reset2 = document.getElementById("reset2")
        let reset3 = document.getElementById("reset3")
        let automation2 = document.getElementById("automation2")
        reset2.style.display = data.infinities.gt(0) ? `flex` : `none`
        reset3.style.display = data.infinities.gt(0) ? `flex` : `none`
        automation2.style.display = data.infinities.gt(0)?`flex`:`none`
        let auto3 = document.getElementById("automation3")
        let reset4 = document.getElementById("reset4")
        let auto4 = document.getElementById("automation4")
        let reset5 = document.getElementById("reset5")
        auto3.style.display = data.finale?`flex`:`none`
        auto4.style.display = data.finale?`flex`:`none`
        reset4.style.display = data.finale?`flex`:`none`
        reset5.style.display = data.finale?`flex`:`none`
        let ti = document.getElementById("tiCheck")
        ti.style.display = data.trueInfinity?`flex`:`none`
        const jPopup = document.getElementById("theJAnnounce")
        jPopup.style.display = data.number.slog().gte(6900)?'flex':`none`
        const jTab = document.getElementById("jPageContainer")
        jTab.style.display = `none`
    }
}