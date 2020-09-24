let Celcius = 0
input.onButtonPressed(Button.A, function () {
    if (Celcius == 10) {
        basic.showNumber(Celcius)
        basic.showString("Ski Time!")
    } else if (Celcius == 20) {
        basic.showNumber(Celcius)
        basic.showString("Picnic time!")
    } else if (Celcius == 30) {
        basic.showNumber(Celcius)
        basic.showString("Beach time!")
    } else if (Celcius == 40) {
        basic.showNumber(Celcius)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(Celcius)
    }
})
basic.forever(function () {
    Celcius = input.temperature()
})
