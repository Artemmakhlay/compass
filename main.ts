let degrés = 0
basic.forever(function () {
    degrés = input.compassHeading()
    if (degrés < 45) {
        basic.showString("N")
    } else if (degrés < 135) {
        basic.showString("E")
    } else if (degrés < 315) {
        basic.showString("W")
    } else if (false) {
    	
    }
})
