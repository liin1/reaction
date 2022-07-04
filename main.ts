let game_started = false
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
basic.forever(function () {
    game_started = false
    basic.pause(100)
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    game_started = true
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
})
basic.forever(function () {
	
})
