input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1999; index++) {
        basic.showNumber(RUTAS[index])
    }
})
input.onButtonPressed(Button.B, function () {
    let index = 0
    VALOR_MIN = RUTAS[index]
    for (let index = 0; index <= 1999; index++) {
        if (VALOR_MIN > RUTAS[index]) {
            VALOR_MIN = RUTAS[index]
        }
    }
    basic.showString("LA MEJOR RUTA ES")
    basic.showNumber(RUTAS.indexOf(VALOR_MIN))
    basic.showString("EL TIEMPO EN ESTA RUTA ES")
    basic.showNumber(VALOR_MIN)
})
let VALOR_MIN = 0
let RUTAS: number[] = []
let vramdom = 25
RUTAS = [2000]
for (let index = 0; index <= 1999; index++) {
    vramdom = 5 * vramdom % 2053
    RUTAS[index] = vramdom + (1000 + 100)
}
