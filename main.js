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
    
    let delta = 0
    function loop() {
        delta++
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'green'
        player.x += player.speedX
        player.y += player.speedY
        ctx.fillRect(player.x, player.y, 16 * 6, 16 * 6)
        drawPlayer(player, ctx, assetImage)
        setPlayerAnimNextFrame(player, 10, delta)
        
        requestAnimationFrame(loop)
    }

    assetImage.addEventListener('load', () => {
        loop()
    })
}


main()