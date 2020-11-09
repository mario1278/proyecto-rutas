input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(RUTAS[index])
    }
})
let RUTAS: number[] = []
let vramdom = 25
RUTAS = [2000]
for (let index = 0; index <= 1999; index++) {
    vramdom = 5 * vramdom % 2053
    RUTAS[index] = vramdom + (1000 + 100)
}
