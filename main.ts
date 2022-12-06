input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Random = randint(0, 2)
    if (Random == 2) {
        basic.showString("Yes!")
    } else if (Random == 1) {
        basic.showString("No!!!")
    } else {
        basic.showString("I don't know!")
    }
    basic.showNumber(8)
})
let Random = 0
basic.showString("Ask a question")
basic.showNumber(8)
basic.forever(function () {
	
})
