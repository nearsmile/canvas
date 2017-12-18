<template>
  <div class="translate">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'translate',
  mounted () {
    const cxt = this.initCanvas()
    this.drawRec(cxt) // 2个矩形
    this.drawRotate(cxt) // 旋转
    this.drawMagicFlower(cxt) // 花
    this.drawScale(cxt) // 缩放
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
    drawRec (cxt) {
      // const cxt = this.initCanvas()
      cxt.fillStyle = '#0aa'
      cxt.fillRect(100, 100, 200, 100)

      cxt.fillStyle = 'yellow'
      cxt.translate(100, 100)
      cxt.fillRect(100, 100, 200, 100)
      cxt.translate(-100, -100)

      cxt.save()
      cxt.fillStyle = 'green'
      cxt.translate(-100, -100)
      cxt.fillRect(100, 100, 200, 100)
      cxt.restore()
    },
    drawRotate (cxt) {
      // const cxt = this.initCanvas()
      for (let i = 0; i < 12; i++) {
        cxt.save()
        cxt.translate(70 + i * 50, 50 + i * 40)
        cxt.fillStyle = '#0aa'
        cxt.fillRect(0, 0, 20, 20)
        cxt.restore()

        cxt.save()
        cxt.translate(70 + i * 50, 50 + i * 40)
        cxt.rotate(i * 30 * Math.PI / 180)
        cxt.fillStyle = 'red'
        cxt.fillRect(0, 0, 20, 20)
        cxt.restore()
      }
    },
    // 让一个正放形，以屏幕中点（即初始正方形左下角顶点）为圆心进行旋转
    drawMagicFlower (cxt) {
      // const cxt = this.initCanvas()
      for (let i = 0; i < 10; i++) {
        cxt.save()
        cxt.translate(200, 500)
        cxt.rotate(36 * i * Math.PI / 180)
        cxt.fillStyle = 'rgba(255, 0, 0, 0.25)'
        cxt.fillRect(0, -100, 100, 100)
        cxt.restore()
      }
    },
    drawScale (cxt) {
      cxt.strokeStyle = 'black'
      for (let i = 0; i < 4; i++) {
        cxt.save()
        cxt.scale(i, i)
        cxt.strokeRect(10, 10, 40, 60)
        cxt.restore()
      }
      cxt.strokeStyle = 'purple'
      for (let i = 0; i < 4; i++) {
        cxt.save()
        cxt.scale(i, i)
        cxt.strokeRect(0, 0, 40, 60)
        cxt.restore()
      }
    }
  }
}
</script>
