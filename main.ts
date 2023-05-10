let Variable2 = 0
let Variable1 = 0
input.onButtonPressed(Button.A, function () {
    Variable2 = 2
    basic.showNumber(Variable2)
    Variable1 = randint(0, 10)
    basic.showNumber(Variable1)
    basic.showNumber(Variable1 * Variable2)
})
