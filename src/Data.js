function getDefaultObject() {
    return {
        //region pre-j
        number: new Decimal(1),
        gain: new Decimal(2),
        resets: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
        isSlowed: false,
        slowdownEffect: new Decimal(2),
        slowdownBoost: new Decimal(1),
        automated: false,
        automatedDos: false,
        automatedFinal: false,
        automatedFinalReal: false,
        infinities: new Decimal(0),
        finale: false,
        trueInfinity: false,
        //endregion
        confirmedJ: false,
        jShards: new Decimal(100),
        jGain: new Decimal(0),
        jResets: [new Decimal(0), new Decimal(0)],
        jResetCosts: [new Decimal(100), new Decimal(50)],
        jSplits: new Decimal(1),
        jAuto: false,
        endedJ: false,
        trueSlow: false,
        //misc
        time: Date.now(),
        currentTab: 1,
        timesec: 0,
        timemin: 0,
        timems: 0
    }
}
let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('theGrindSave', JSON.stringify(data))
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem('theGrindSave'))
    if (savedata !== undefined) fixSave(data, savedata)
}
//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = new Decimal(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function fixOldSaves(){
    //fix important things from old versions
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    let exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 1000);
window.onload = function (){
    load()
    fixOldSaves()
}
//full reset
function fullReset(){
    exportSave()
    deleteSave()
    location.reload()
}
function deleteSave(){
    window.localStorage.removeItem('theGrindSave')
}
