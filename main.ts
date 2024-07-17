let figura_aleatoria = 0
let seleccion = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    figura_aleatoria += randint(1, 7)
    if (figura_aleatoria == 1) {
        basic.showString("SQUARE")
    }
    if (figura_aleatoria == 2) {
        basic.showString("CIRCLE")
    }
    if (figura_aleatoria == 3) {
        basic.showString("RHOMBOID")
    }
    if (figura_aleatoria == 4) {
        basic.showString("TRIANGLE")
    }
    if (figura_aleatoria == 5) {
        basic.showString("DIAMOND")
    }
    if (figura_aleatoria == 6) {
        basic.showString("RECTANGLE")
    }
    if (figura_aleatoria == 7) {
        basic.showString("TRAPEZE")
    }
})
basic.forever(function () {
    if (figura_aleatoria == 0) {
        if (input.pinIsPressed(TouchPin.P0) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2))) {
            if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 2
            }
            if (input.pinIsPressed(TouchPin.P2) && (!(input.pinIsPressed(TouchPin.P1)) && input.pinIsPressed(TouchPin.P0))) {
                seleccion = 2
            }
            if (input.pinIsPressed(TouchPin.P2) && (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P0)))) {
                seleccion = 4
            }
            if (input.pinIsPressed(TouchPin.P1) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 5
            }
            if (input.pinIsPressed(TouchPin.P1) && (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P2))) {
                seleccion = 6
            }
            if (input.pinIsPressed(TouchPin.P0) && (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 7
            }
            if (input.pinIsPressed(TouchPin.P1) && (input.pinIsPressed(TouchPin.P2) && !(input.pinIsPressed(TouchPin.P0)))) {
                seleccion = 3
            }
        }
    }
    if (figura_aleatoria == seleccion) {
        figura_aleatoria = 0
        seleccion = 0
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
    } else {
        figura_aleatoria = 0
        seleccion = 0
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
    }
})
