<template>
  <div class="round">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'round',
  mounted () {
    // this.drawRoundRect() // 绘制圆角矩形
    this.draw2048()
  },
  methods: {
    initCanvas () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const cxt = canvas.getContext('2d')
      return cxt
    },
    drawRoundRect () {
      const cxt = this.initCanvas()
      cxt.strokeStyle = '#0078aa'
      this.createRoundRect(cxt, 50, 450, 300, 250, 30)
      cxt.stroke()
      this.createRoundRect(cxt, 50, 50, 300, 250, 30)
      cxt.stroke()
    },
    // 绘制方块
    createRoundRect (cxt, x, y, w, h, r) {
      cxt.beginPath()
      cxt.arc(x + r, y + r, r, Math.PI, Math.PI * 3 / 2)
      cxt.lineTo(w - r + x, y)
      cxt.arc(w - r + x, y + r, r, Math.PI * 3 / 2, Math.PI * 2)
      cxt.lineTo(w + x, h - r + y)
      cxt.arc(w - r + x, h - r + y, r, 0, Math.PI * 1 / 2)
      cxt.lineTo(x + r, y + h)
      cxt.arc(x + r, h - r + y, r, Math.PI * 1 / 2, Math.PI)
      // cxt.lineTo(x, y + r)
      cxt.closePath()
    },
    draw2048 () {
      const cxt = this.initCanvas()
      cxt.fillStyle = '#aa7b41'
      cxt.fillRect(0, 0, 416, 736)
      // cxt.strokeStyle = '#0078aa'
      // cxt.stroke()
      // cxt.fill()
      for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
          this.createRoundRect(cxt, 23 * i + 80 * (i - 1), 23 + j + 80 * (j - 1), 60, 60, 5)
          cxt.fillStyle = '#ccbfb4'
          cxt.strokeStyle = '#0078aa'
          cxt.stroke()
          cxt.fill()
        }
      }
    },
    drawTangent () {
      // const cxt = this.initCanvas()
    }
  }
}
</script>