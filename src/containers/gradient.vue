<template>
  <div class="gradient">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'gradient',
  mounted () {
    // this.gradientOne() // 创建渐变
    // this.gradientTwo() // 渐变比较
    this.radialGradient()
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
    gradientOne () {
      const cxt = this.initCanvas()

      cxt.rect(0, 0, 200, 200)
      // 添加渐变线
      let grd = cxt.createLinearGradient(100, 100, 150, 150)
      // 添加颜色断点
      grd.addColorStop(0, 'black')
      grd.addColorStop(0.5, 'white')
      grd.addColorStop(1, 'red')

      // 应用渐变
      cxt.fillStyle = grd
      cxt.fill()
    },
    gradientTwo () {
      const cxt = this.initCanvas()
      const grd = cxt.createLinearGradient(0, 0, 300, 0)

      grd.addColorStop(0, 'olive')
      grd.addColorStop(0.25, 'maroon')
      grd.addColorStop(0.5, 'aqua')
      grd.addColorStop(0.75, 'fuchsia')
      grd.addColorStop(0.25, 'teal')

      cxt.fillStyle = grd
      cxt.strokeStyle = grd

      cxt.strokeRect(2, 50, 300, 50)
      cxt.strokeRect(2, 105, 100, 50)
      cxt.strokeRect(2, 160, 400, 50)

      cxt.fillRect(5, 250, 100, 48)
      cxt.fillRect(5, 300, 200, 48)
      cxt.fillRect(5, 350, 300, 48)
      cxt.fillRect(5, 400, 400, 48)
      cxt.fillRect(0, 450, 416, 48)
    },
    radialGradient () {
      const cxt = this.initCanvas()
      const grd = cxt.createRadialGradient(200, 200, 50, 200, 200, 150)

      grd.addColorStop(0, 'olive')
      grd.addColorStop(0.25, 'maroon')
      grd.addColorStop(0.5, 'aqua')
      grd.addColorStop(0.75, 'fuchsia')
      grd.addColorStop(0.25, 'teal')

      cxt.fillStyle = grd
      // cxt.strokeStyle = grd
      cxt.fillRect(0, 0, 416, 400)
    }
  }
}
</script>
