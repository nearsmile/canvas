<template>
  <div class="bubble">
    <canvas @touchmove="handle($event)"></canvas>
  </div>
</template>
<script>
  export default {
    name: 'bubble',
    data () {
      return {
        canvas: null,
        cxt: null,
        balls: []
      }
    },
    methods: {
      initCanvas () {
        const canvas = document.querySelector('canvas')
        const width = document.documentElement.scrollWidth || document.body.scrollWidth
        const height = document.documentElement.scrollHeight || document.body.scrollHeight
        canvas.width = width
        canvas.height = height
        const cxt = canvas.getContext('2d')
        return {
          canvas,
          cxt,
          width,
          height
        }
      },
      bubbles (canvas, cxt, width, height) {
        let balls = []

        for (let i = 0; i < 50; i++) {
          let _ball = {
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 50 + 20
          }
          balls[i] = _ball
        }
        return balls
      },
      handle (event) {
        // console.log(this.canvas)
        // console.log(this.balls)
        this.detect(event, this.canvas, this.cxt, this.balls)
      },
      draw (cxt, balls) {
        for (let i = 0; i < balls.length; i++) {
          cxt.beginPath()
          cxt.globalAlpha = 0.5

          let R = Math.floor(Math.random() * 255)
          let G = Math.floor(Math.random() * 255)
          let B = Math.floor(Math.random() * 255)
          // console.log(`rgb(${R}, ${G}, ${B})`)
          cxt.fillStyle = `rgb(${R}, ${G}, ${B})`
          cxt.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2)
          cxt.fill()
        }
      },
      detect (event, canvas, cxt, balls) {
        // console.log()
        let x = event.clientX - canvas.getBoundingClientRect().left
        let y = event.clientY - canvas.getBoundingClientRect().top

        for (let i = 0; i < balls.length; i++) {
          cxt.beginPath()
          cxt.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2)

          if (cxt.isPointInPath(x, y)) {
            cxt.fillStyle = `rgba(255, 255, 255, 0.1)`
            cxt.fill()
          }
        }
      }
    },
    mounted () {
      const { canvas, cxt, width, height } = this.initCanvas()
      const balls = this.bubbles(canvas, cxt, width, height)
      this.balls = balls
      this.canvas = canvas
      this.cxt = cxt
      // console.log(width, height)
      // console.log('balls', balls, canvas, cxt, width, height)
      this.draw(cxt, balls)
    }
  }
</script>
