let playerCar: game.LedSprite = null
let score = 0
let gameOn = false
input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    score = 0
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(100)
    }
    score += score
    game.gameOver()
})
