def on_forever():
    # Bucle que muestra la inclinación en el eje X
    x = input.acceleration(Dimension.X)
    if x > 200:
        basic.show_string(">")
    elif x < -200:
        basic.show_string("<")
    else:
        basic.show_string("-")

basic.forever(on_forever)
