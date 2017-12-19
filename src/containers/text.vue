<template>
  <div class="text">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'text',
  mounted () {
    const cxt = this.initCanvas()
    this.textOne(cxt)
    this.textTwo(cxt)
    this.textAlign(cxt)
    this.textBaseLine(cxt)
    this.MeasureText(cxt)
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
    textOne (cxt) {
      cxt.font = '30px serif'
      cxt.fillStyle = '#0aa'
      cxt.fillText('canvas demo', 40, 30)

      cxt.font = 'italic small-caps bolder 50px/2 tahoma'
      cxt.fillStyle = 'green'
      cxt.fillText('custom font demo', 10, 100)
    },
    textTwo (cxt) {
      // const cxt = this.initCanvas()
      cxt.beginPath()
      cxt.font = '50px Verdana'
      let gradient = cxt.createLinearGradient(0, 0, 416, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')
      cxt.fillStyle = gradient
      cxt.strokeStyle = '#0aa'
      cxt.strokeText('diff property', 50, 200)
      cxt.fillText('diff property', 50, 250)
      // 限制宽度
      cxt.fillText('diff property', 50, 300, 200)

      cxt.beginPath()
      let img = new Image()
      img.src = require('../assets/A02.png')
      img.onload = () => {
        let pattern = cxt.createPattern(img, 'repeat')
        cxt.fillStyle = pattern
        cxt.fillText('diff property', 250, 340)
      }
    },
    textAlign (cxt) {
      // const cxt = this.initCanvas()
      cxt.moveTo(213, 350)
      cxt.lineTo(213, 600)
      cxt.stroke()

      cxt.fillStyle = '#0a0'
      cxt.font = '30px Arial'
      cxt.textAlign = 'start'
      cxt.fillText('text-align-start', 213, 380)

      cxt.textAlign = 'end'
      cxt.fillText('text-align-end', 213, 420)

      cxt.textAlign = 'center'
      cxt.fillText('text-align-center', 213, 470)

      cxt.textAlign = 'left'
      cxt.fillText('text-align-left', 213, 520)

      cxt.textAlign = 'right'
      cxt.fillText('text-align-right', 213, 570)
    },
    textBaseLine (cxt) {
      cxt.strokeStyle = 'blue'
      cxt.moveTo(0, 650)
      cxt.lineTo(416, 650)
      cxt.stroke()

      // 在 y=600 以不同的 textBaseline 值放置每个单词
      cxt.font = '20px arial'
      cxt.textBaseline = 'top'
      cxt.fillText('Top', 50, 650)
      cxt.textBaseline = 'bottom'
      cxt.fillText('Bottom', 120, 650)
      cxt.textBaseline = 'middle'
      cxt.fillText('Middle', 240, 650)
      cxt.textBaseline = 'alphabetic'
      cxt.fillText('Alphabetic', 340, 650)
      cxt.textBaseline = 'hanging'
      cxt.fillText('Hanging', 400, 650)
    },
    MeasureText (cxt) {
      // const cxt = this.initCanvas()
      cxt.textAlign = 'center'
      cxt.textBaseline = 'middle'

      cxt.fillStyle = 'purple'
      cxt.font = '20px tahoma'
      let text = 'measureText Demo'
      cxt.fillText('width:' + cxt.measureText(text).width, 200, 680)
      cxt.fillText(text, 200, 710)
    }
  }
}
</script>
