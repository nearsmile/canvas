<template>
  <div class="bezier">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'bezier',
  mounted () {
    this.drawBezier() // 实现模板A
    this.drawBezierThree() // 三次贝塞尔曲线
    this.drawPicture()
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
    drawBezier () {
      const cxt = this.initCanvas()
      cxt.lineWidth = 2
      cxt.strokeStyle = '#333'
      cxt.beginPath()
      cxt.moveTo(20, 10)
      cxt.quadraticCurveTo(256, 43, 458, 336)
      cxt.stroke()
    },
    drawBezierThree () {
      const cxt = this.initCanvas()
      cxt.lineWidth = 2
      cxt.strokeStyle = '#333'
      cxt.beginPath()
      cxt.moveTo(100, 30)
      cxt.bezierCurveTo(239, 54, 243, 349, 329, 175)
      cxt.stroke()
    },
    // 绘制图片
    drawPicture () {
      const cxt = this.initCanvas()
      this.drawPrairie(cxt)
      this.drawSky(cxt)
      for (let i = 0; i < 6; i++) {
        let x0 = 500 * Math.random() + 50
        let y0 = 200 * Math.random() + 50
        let c0 = 100 * Math.random() + 50
        this.drawCloud(cxt, x0, y0, c0)
      }
    },
    // 绘制天空
    drawSky (cxt) {
      // const cxt = this.initCanvas()
      cxt.save()

      cxt.beginPath()
      cxt.moveTo(0, 420)
      cxt.bezierCurveTo(250, 300, 350, 550, 800, 400)
      cxt.lineTo(800, 0)
      cxt.lineTo(0, 0)
      cxt.closePath()

      let lineStyle = cxt.createRadialGradient(400, 0, 50, 400, 0, 200)
      lineStyle.addColorStop(0, '#42a9aa')
      lineStyle.addColorStop(1, '#2491aa')

      cxt.fillStyle = lineStyle

      cxt.fill()

      cxt.restore()
    },
    // 绘制大草原
    drawPrairie (cxt) {
      // const cxt = this.initCanvas()
      cxt.save()

      cxt.beginPath()
      cxt.moveTo(0, 420)
      cxt.bezierCurveTo(250, 300, 350, 550, 800, 400)
      cxt.lineTo(800, 600)
      cxt.lineTo(0, 600)
      cxt.closePath()

      let lineStyle = cxt.createLinearGradient(0, 600, 600, 0)
      lineStyle.addColorStop(0, '#00AA58')
      lineStyle.addColorStop(0.3, '#63AA7B')
      lineStyle.addColorStop(1, '#04AA00')

      cxt.fillStyle = lineStyle
      cxt.fill()

      cxt.restore()
    },
    /* 渲染单个云朵
     context:  canvas.getContext("2d")对象
     cx: 云朵X轴位置
     cy: 云朵Y轴位置
     cw: 云朵宽度
     */
    drawCloud (cxt, cx, cy, cw) {
      // const cxt = this.initCanvas()
      let maxW = 800
      // 如果超过边界从头开始绘制
      cx = cx % maxW
      // 云朵高度为宽度的60%
      let ch = cw * 0.6
      cxt.beginPath()
      cxt.fillStyle = '#fff'
      // 创建渐变
      let grd = cxt.createLinearGradient(0, 0, 0, cy)
      grd.addColorStop(0, 'rgba(255,255,255,0.8)')
      grd.addColorStop(1, 'rgba(255,255,255,0.5)')
      cxt.fillStyle = grd

      // 在不同位置创建5个圆拼接成云朵现状
      cxt.arc(cx, cy, cw * 0.19, 0, 360, false)
      cxt.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360, false)
      cxt.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360, false)
      cxt.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360, false)
      cxt.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360, false)
      cxt.closePath()

      cxt.fill()
    }
  }
}
</script>
