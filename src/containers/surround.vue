<template>
  <div class="surround">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'surround',
  mounted () {
    const cxt = this.initCanvas()
    this.surround(cxt)
    this.demo(cxt)
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
    surround () {
      const cxt = this.initCanvas()
      cxt.shadowColor = '#545454'
      cxt.shadowOffsetX = 5
      cxt.shadowOffsetY = 5
      cxt.shadowBlur = 2

      cxt.arc(200, 200, 150, 0, Math.PI * 2, false)
      cxt.arc(200, 200, 180, 0, Math.PI * 2, true)
      cxt.fillStyle = '#0aa'
      cxt.fill()
    },
    // 逆时针绘制三角形
    Triangle (cxt, x1, y1, x2, y2, x3, y3) {
      cxt.moveTo(x1, y1)
      cxt.lineTo(x3, y3)
      cxt.lineTo(x2, y2)
      cxt.lineTo(x1, y1)
    },
    Rect (cxt, x, y, w, h) {
      cxt.moveTo(x, y)
      cxt.lineTo(x, y + h)
      cxt.lineTo(x + w, y + h)
      cxt.lineTo(x + w, y)
      cxt.lineTo(x, y)
    },
    demo (context) {
      context.beginPath()
      context.rect(200, 100, 400, 400)
      this.Rect(context, 250, 150, 300, 150)
      this.Triangle(context, 345, 350, 420, 450, 270, 450)
      context.arc(500, 400, 50, 0, Math.PI * 2, true)
      context.closePath()

      context.fillStyle = '#058'
      context.shadowColor = 'gray'
      context.shadowOffsetX = 10
      context.shadowOffsetY = 10
      context.shadowBlur = 10
      context.fill()
    }
  }
}
</script>
