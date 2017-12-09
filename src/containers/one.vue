<template>
  <div class="one">
    <canvas>不支持canvas</canvas>
  </div>
</template>
<script>
export default {
  name: 'one',
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  mounted () {
    // this.initCanvas() // 单独一条线
    // this.threeLine() // 单独3条线
    // this.CanvasRect() // 绘制正方形
    // this.CanvasTheeRect() // 绘制3个正方形
    this.drawMagicRect() // 绘制魔性正方形
  },
  methods: {
    // 单独一条线
    initCanvas () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      console.log('scrollContent', scrollWidth, scrollHeight)
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const context = canvas.getContext('2d')

      context.moveTo(50, 50)
      context.lineTo(200, 200)
      context.lineWidth = 2
      context.strokeStyle = '#aa394c'
      context.stroke()
    },

    // 单独3条线
    threeLine () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      console.log('scrollContent', scrollWidth, scrollHeight)
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const context = canvas.getContext('2d')

      context.beginPath()
      context.moveTo(50, 50)
      context.lineTo(200, 200)
      context.lineWidth = 4
      context.strokeStyle = 'red'
      context.stroke()

      context.beginPath()
      context.moveTo(100, 50)
      context.lineTo(250, 200)
      context.lineWidth = 4
      context.strokeStyle = 'blue'
      context.stroke()

      context.beginPath()
      context.moveTo(150, 50)
      context.lineTo(300, 200)
      context.lineWidth = 4
      context.strokeStyle = 'green'
      context.stroke()
    },

    // 绘制3个正方形
    CanvasRect () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      console.log('scrollContent', scrollWidth, scrollHeight)
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const context = canvas.getContext('2d')

      context.beginPath()
      context.moveTo(50, 50)
      context.lineTo(200, 50)
      context.lineTo(200, 200)
      context.lineTo(50, 200)
      // context.lineTo(50, 50) // 最后一笔可以不画出来，直接使用closePath()，会自动闭合
      context.closePath()

      context.lineWidth = 2
      context.strokeStyle = '#aa394c'

      context.fillStyle = 'yellow'
      context.fill()

      context.stroke()
    },

    // 绘制3个正方形
    CanvasTheeRect () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      console.log('scrollContent', scrollWidth, scrollHeight)
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const context = canvas.getContext('2d')

      this.drawRect(context, 20, 20, 50, 50, 'orange', 3, 'red')
      this.drawRect(context, 84, 20, 50, 50, 'green', 3, 'black')
      this.drawRectInner(context, 148, 20, 50, 50, 'yellow', 3, 'pink')
    },
    drawRect (cxt, x, y, width, height, fillColor, borderWidth, borderColor) {
      cxt.beginPath()
      cxt.moveTo(x, y)
      cxt.lineTo(x + width, y)
      cxt.lineTo(x + width, y + height)
      cxt.lineTo(x, y + height)
      cxt.lineTo(x, y)
      cxt.closePath()

      cxt.lineWidth = borderWidth
      cxt.strokeStyle = borderColor
      cxt.fillStyle = fillColor

      cxt.fill()
      cxt.stroke()
    },
    drawRectInner (cxt, x, y, w, h, fill, bW, bC) {
      cxt.beginPath()
      cxt.rect(x, y, w, h)
      // cxt.closePath() // 可以不用

      cxt.lineWIdth = bW
      cxt.strokeStyle = bC
      cxt.fillStyle = fill

      cxt.fill()
      cxt.stroke()
    },

    // 绘制魔性正方形
    drawMagicRect () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      canvas.width = scrollWidth
      canvas.height = scrollHeight

      const context = canvas.getContext('2d')
      // 绘制背景颜色
      context.beginPath()
      context.rect(0, 0, scrollWidth, scrollHeight)
      context.fillStyle = '#aa9033'
      context.fill()

      for (let i = 0; i < 20; i++) {
        this.buildRect(context, 10 + 10 * i, 10 + 10 * i, 400 - 20 * i, 400 - 20 * i, '#000', 4)
        this.buildRect(context, 15 + 10 * i, 15 + 10 * i, 390 - 20 * i, 390 - 20 * i, '#fff', 4)
      }

      context.beginPath()
      context.rect(208, 208, 4, 4)
      context.fillStyle = 'black'
      context.lineWidth = 4
      context.fill()
      context.stroke()
    },
    buildRect (cxt, x, y, w, h, color, line) {
      cxt.beginPath()
      cxt.rect(x, y, w, h)
      cxt.lineWidth = line
      cxt.strokeStyle = color
      cxt.stroke()
    }
  }
}
</script>
<style lang="scss" scoped>
.one {
  width: 100%;
  min-height: 100vh;
}

canvas {
  display: block;
  box-sizing: border-box;
}

</style>
