<template>
  <div class="transform">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'transform',
  mounted () {
    const context = this.initCanvas()
    this.drawTransform(context)
    this.setTransform(context)
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
    drawTransform (cxt) {
      cxt.fillStyle = 'yellow'
      cxt.strokeStyle = '#0aa'
      cxt.lineWidth = 3

      cxt.save()
      // 平移至(300,200)
      cxt.transform(1, 0, 0, 1, 240, 10)
      // 水平方向放大2倍，垂直方向放大1.5倍
      cxt.transform(2, 0, 0, 1.5, 0, 0)
      // 水平方向向右倾斜宽度10%的距离，垂直方向向上倾斜高度10%的距离
      cxt.transform(1, -0.1, 0.1, 1, 0, 0)
      cxt.fillRect(0, 0, 50, 50)
      cxt.strokeRect(0, 0, 50, 70)
      cxt.restore()
    },
    setTransform (cxt) {
      cxt.fillStyle = 'green'
      cxt.fillRect(200, 100, 250, 100)

      cxt.setTransform(1, 0.5, -0.5, 1, 30, 10)
      cxt.fillStyle = 'red'
      cxt.fillRect(20, 100, 120, 50)

      cxt.setTransform(1, 0.5, -0.5, 1, 30, 10)
      cxt.fillStyle = 'blue'
      cxt.fillRect(20, 100, 120, 50)
    }
  }
}
</script>
