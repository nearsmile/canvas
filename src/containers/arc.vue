<template>
  <div class="arc">
    <canvas></canvas>
  </div>
</template>
<script>
import { drawArcTo } from '@/components/Canvas'
export default {
  name: 'arc',
  mounted () {
    this.drawArc() // 实现模板A
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
    drawArc () {
      const cxt = this.initCanvas()
      // cxt, x0, y0, x1, y1, x2, y2, r, lineW, color
      drawArcTo(cxt, 10, 10, 100, 10, 100, 80, 100, 5, 'red')
      // drawArcTo(cxt, 100, 100, 300, 100, 300, 200, 50, 5, 'red')
      // drawArcTo(cxt, 0, 0, 300, 0, 300, 200, 50, 5, 'red')
      cxt.beginPath()
      cxt.moveTo(10, 10)
      cxt.lineTo(100, 10)
      cxt.lineTo(100, 80)
      cxt.lineWidth = 1
      cxt.strokeStyle = '#0088aa'
      // cxt.arcTo(0, 0, 40, 40, 40)
      cxt.stroke()
    }
  }
}
</script>
