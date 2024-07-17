figura_aleatoria = 0
seleccion = 0

def on_button_pressed_a():
    global figura_aleatoria
    basic.clear_screen()
    figura_aleatoria += randint(1, 7)
    if figura_aleatoria == 1:
        basic.show_string("SQUARE")
    if figura_aleatoria == 2:
        basic.show_string("CIRCLE")
    if figura_aleatoria == 3:
        basic.show_string("RHOMBOID")
    if figura_aleatoria == 4:
        basic.show_string("TRIANGLE")
    if figura_aleatoria == 5:
        basic.show_string("DIAMOND")
    if figura_aleatoria == 6:
        basic.show_string("RECTANGLE")
    if figura_aleatoria == 7:
        basic.show_string("TRAPEZE")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global seleccion, figura_aleatoria
    if figura_aleatoria == 0:
        if input.pin_is_pressed(TouchPin.P0) or (input.pin_is_pressed(TouchPin.P1) or input.pin_is_pressed(TouchPin.P2)):
            if input.pin_is_pressed(TouchPin.P0) and (input.pin_is_pressed(TouchPin.P1) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 2
            if input.pin_is_pressed(TouchPin.P2) and (not (input.pin_is_pressed(TouchPin.P1)) and input.pin_is_pressed(TouchPin.P0)):
                seleccion = 2
            if input.pin_is_pressed(TouchPin.P2) and (not (input.pin_is_pressed(TouchPin.P1)) and not (input.pin_is_pressed(TouchPin.P0))):
                seleccion = 4
            if input.pin_is_pressed(TouchPin.P1) and (not (input.pin_is_pressed(TouchPin.P0)) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 5
            if input.pin_is_pressed(TouchPin.P1) and (input.pin_is_pressed(TouchPin.P0) and input.pin_is_pressed(TouchPin.P2)):
                seleccion = 6
            if input.pin_is_pressed(TouchPin.P0) and (not (input.pin_is_pressed(TouchPin.P1)) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 7
            if input.pin_is_pressed(TouchPin.P1) and (input.pin_is_pressed(TouchPin.P2) and not (input.pin_is_pressed(TouchPin.P0))):
                seleccion = 3
    if figura_aleatoria == seleccion:
        figura_aleatoria = 0
        seleccion = 0
        basic.show_icon(IconNames.HAPPY)
        basic.pause(3000)
    else:
        figura_aleatoria = 0
        seleccion = 0
        basic.show_icon(IconNames.SAD)
        basic.pause(3000)
basic.forever(on_forever)
