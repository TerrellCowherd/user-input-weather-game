controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let weather_prediction = game.askForString("What is your weather prediction?")
game.splash("It is going to " + weather_prediction)
let weather_dude = sprites.create(img`
. . . . 4 4 4 . 4 . 4 4 4 . . . 
. . . 4 d d d 4 4 4 4 d d . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 d d d 4 4 4 4 d d 4 4 . 
. 4 4 4 d d 4 4 4 4 d d d . . . 
4 4 4 4 f f f d d d f f f . . . 
. 4 4 4 4 4 d d d d d d d 4 4 . 
. . 4 4 4 d d d d d d d 4 4 . . 
. . . 1 1 2 2 5 5 2 1 . . . . . 
. . . 1 1 c c 5 5 c 1 . . . . . 
. . 1 1 1 c c c c c c 1 . . . . 
. . 1 1 1 c c c c c c 1 . . . . 
. 1 1 1 1 d . . d d 1 1 1 . . . 
. 1 1 1 1 2 . . 2 2 1 1 1 . . . 
. . . . c 2 c . c 2 c . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 7)
if (weather_effects == 0) {
    effects.confetti.startScreenEffect()
    weather_dude.say("confettin")
    scene.setBackgroundColor(11)
} else if (weather_effects == 1) {
    effects.hearts.startScreenEffect()
    weather_dude.say("i dont love you")
    scene.setBackgroundColor(3)
} else if (weather_effects == 2) {
    effects.smiles.startScreenEffect()
    weather_dude.say(":)")
    scene.setBackgroundColor(2)
} else if (weather_effects == 3) {
    effects.blizzard.startScreenEffect()
    weather_dude.say("cold")
    scene.setBackgroundColor(13)
} else if (weather_effects == 4) {
    effects.bubbles.startScreenEffect()
    weather_dude.say("i am drowning")
    scene.setBackgroundColor(6)
} else if (weather_effects == 4) {
    effects.starField.startScreenEffect()
    weather_dude.say("i cant breathe")
    scene.setBackgroundColor(15)
} else {
    effects.clouds.startScreenEffect()
    weather_dude.say("cloud strife from final fantasy 7")
    scene.setBackgroundColor(9)
}
