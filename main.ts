let grader = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    grader = input.compassHeading()
    basic.showNumber(grader)
})
basic.forever(function () {
    if (input.compassHeading() < 315 || input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() < 45 || input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() < 135 || input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (true) {
        basic.showArrow(ArrowNames.East)
    }
})
