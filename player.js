export const player = {
    width: 200,
    height: 200,
    x: 10,
    y: 10,
    speedX: 0,
    speedY: 0,
    isMoving: false,
    currentAnim: 'down',
    currentFrame: 0,
    isIdle: true,
    animations : {
        'down': [
            { x: 0, y: 384 },
            { x: 16, y: 384 },
            { x: 32, y: 384 },
            { x: 48, y: 384 }
        ],
        'right': [
            { x: 0, y: 400 },
            { x: 16, y: 400 },
            { x: 32, y: 400 },
            { x: 48, y: 400 }
        ],
        'up': [
            { x: 0, y: 416 },
            { x: 16, y: 416 },
            { x: 32, y: 416 },
            { x: 48, y: 416 }
        ],
        'left': [
            { x: 0, y: 432 },
            { x: 16, y: 432 },
            { x: 32, y: 432 },
            { x: 48, y: 432 }
        ]
    }
}

export function drawPlayer(player, ctx, assetImage) {
    ctx.drawImage(
        assetImage, 
        player.animations[player.currentAnim][player.currentFrame].x,
        player.animations[player.currentAnim][player.currentFrame].y, 
        16,
        16,
        player.x,
        player.y,
        16 * 6,
        16 * 6
    )
}

export function setPlayerAnimNextFrame(player, frameRate, frames) {
    if (frames % frameRate === 0) {
        if (player.animations[player.currentAnim].length - 1 === player.currentFrame || player.isIdle) {
            player.currentFrame = 0
        } else {
            player.currentFrame++
        } 
    }
}