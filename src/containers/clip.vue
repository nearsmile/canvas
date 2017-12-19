<template>
  <div class="clip">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'clip',
  mounted () {
    const cxt = this.initCanvas()
    this.clip(cxt)
    this.drawImage(cxt)
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
    clip (cxt) {
      // const cxt = this.initCanvas()

      // 在屏幕上绘制一个大方块
      cxt.fillStyle = 'black'
      cxt.fillRect(10, 10, 200, 200)
      cxt.save()
      cxt.beginPath()

      // 裁剪画布从(0，0)点至(50，50)的正方形
      cxt.rect(0, 0, 50, 50)
      cxt.clip()

      // 红色圆
      cxt.beginPath()
      cxt.strokeStyle = 'red'
      cxt.lineWidth = 3
      cxt.arc(100, 100, 100, 0, Math.PI * 2, false)

      // 整圆
      cxt.stroke()
      cxt.closePath()

      cxt.restore()
      cxt.save()
      // 再次裁切整个画布
      cxt.beginPath()
      cxt.rect(0, 0, 200, 200)
      cxt.clip()

      cxt.beginPath()
      cxt.strokeStyle = '#0aa'
      cxt.lineWidth = 3
      cxt.arc(100, 100, 50, 0, Math.PI * 2, false)
      cxt.stroke()
      cxt.closePath()

      cxt.restore()
    },
    drawImage (cxt) {
      // const cxt = this.initCanvas()
      /* cxt.beginPath()
      cxt.moveTo(20, 10)
      cxt.bezierCurveTo(450, 220, 450, 300, 400, 315)
      cxt.bezierCurveTo(350, 300, 350, 220, 400, 260)
      cxt.clip()
      cxt.closePath() */
      let img = new Image()
      img.src = require('../assets/commodity.png')
      img.onload = () => {
        cxt.drawImage(img, 50, 250)
      }
    }
  }
}
</script>
