<template>
  <div class="line">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'line',
  mounted () {
    this.lineCap()
    this.lineJoin()
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

    // 端点样式
    lineCap () {
      const cxt = this.initCanvas()
      this.drawLine(cxt, 100, 100, 100, 150, '', 2, 'red')
      this.drawLine(cxt, 400, 100, 400, 150, '', 2, 'red')
      this.drawLine(cxt, 100, 100, 400, 100, 'butt', 10, 'green')
      this.drawLine(cxt, 100, 120, 400, 120, 'round', 10)
      this.drawLine(cxt, 100, 140, 400, 140, 'square', 10)
    },
    drawLine (cxt, x, y, x2, y2, type, w, color) {
      cxt.beginPath()
      cxt.strokeStyle = color
      cxt.lineWidth = w
      cxt.moveTo(x, y)
      cxt.lineTo(x2, y2)
      cxt.lineCap = type
      cxt.stroke()
    },

    // 折线样式
    lineJoin () {
      const cxt = this.initCanvas()
      this.drawLineJoin(cxt, 10, 200, 110, 250, 10, 300, 10, 'green', 'miter')
      this.drawLineJoin(cxt, 50, 200, 150, 250, 50, 300, 10, 'green', 'bevel')
      this.drawLineJoin(cxt, 90, 200, 190, 250, 90, 300, 10, 'green', 'round')
    },
    drawLineJoin (cxt, x, y, x2, y2, x3, y3, w, color, type) {
      cxt.beginPath()
      cxt.strokeStyle = color
      cxt.lineWidth = w
      cxt.lineJoin = type
      cxt.moveTo(x, y)
      cxt.lineTo(x2, y2)
      cxt.lineTo(x3, y3)
      cxt.stroke()
    }
  }
}
</script>
