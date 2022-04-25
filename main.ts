let playerCar: game.LedSprite = null
let score = 0
let gameOn = false
let car0: game.LedSprite = null
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
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car0 = game.createSprite(0, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (car0.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car0)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car0.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car0.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
