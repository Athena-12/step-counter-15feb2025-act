input.onSound(DetectedSound.Loud, function () {
    STEP += 1
})
input.onGesture(Gesture.Shake, function () {
    STEP += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(STEP)
})
let STEP = 0
STEP = 0
basic.forever(function () {
	
})
