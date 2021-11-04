let percent = new Decimal(0)
function calculatePercent(){
    percent = new Decimal(data.number.div(new Decimal("e1e308")).times(100))
}
function infinity(){
    data.automated = true
    data.isInfinite = true
}