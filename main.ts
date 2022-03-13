let distance = 0
radio.setGroup(25)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (distance >= 1) {
    	
    } else {
        radio.sendNumber(-1)
        basic.pause(200)
    }
})
