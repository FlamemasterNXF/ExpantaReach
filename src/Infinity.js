let percent = new Decimal(0)
function calculatePercent(){
    percent = new Decimal(data.number.log10().log10().floor().div(308).times(100))
}
function infinity(){
    data.automated = true
    data.isInfinite = true
}