let x = 0
basic.forever(function () {
    // Bucle que muestra la inclinación en el eje X
    x = input.acceleration(Dimension.X)
    if (x > 200) {
        basic.showString(">")
    } else if (x < -200) {
        basic.showString("<")
    } else {
        basic.showString("-")
    }
})
