import { player, drawPlayer, setPlayerAnimNextFrame } from "./player.js"

function main() {
    const canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = false

    const assetImage = new Image()
    assetImage.src = './asset.png'

    addEventListener('keydown', (key) => {
        if (key.code === 'ArrowRight') {
            player.speedX = 10
            player.currentAnim = 'right'
            player.isIdle = false
        }
        if (key.code === 'ArrowLeft') {
            player.speedX = -10
            player.currentAnim = 'left'
            player.isIdle = false
        }
        if (key.code === 'ArrowUp') {
            player.speedY = -10
            player.currentAnim = 'up'
            player.isIdle = false
        }
        if (key.code === 'ArrowDown') {
            player.speedY = 10
            player.currentAnim = 'down'
            player.isIdle = false
        }
    })

    addEventListener('keyup', (key) => {
        if (key.code === 'ArrowRight') {
            player.speedX = 0
            player.isIdle = true
        }
        if (key.code === 'ArrowLeft') {
            player.speedX = 0
            player.isIdle = true
        }
        if (key.code === 'ArrowUp') {
            player.speedY = 0
            player.isIdle = true
        }
        if (key.code === 'ArrowDown') {
            player.speedY = 0
            player.isIdle = true
        }
    })
    
    function setBackground(ctx, color) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    let frames = 0
    let previousTime = window.performance.now()
    const fps = 60
    const timePerFrame = 1000 / fps // 1000 ms = 1 sec
    function loop() {
        requestAnimationFrame(loop)

        const currentTime = window.performance.now()
        const timeElapsed = currentTime - previousTime

        // In that case don't draw the frame
        if (timeElapsed < timePerFrame) return

        // make a visualization
        const excessTime = timeElapsed % timePerFrame
        previousTime = currentTime - excessTime

        frames++
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        setBackground(ctx, 'black')
        ctx.fillStyle = 'green'
        player.x += player.speedX
        player.y += player.speedY
        ctx.fillRect(player.x, player.y, 16 * 6, 16 * 6)
        drawPlayer(player, ctx, assetImage)
        setPlayerAnimNextFrame(player, 10, frames)
    }

    assetImage.addEventListener('load', () => {
        loop()
        setInterval(() => {
            console.log(frames)
        }, 1000)
    })
}


main()