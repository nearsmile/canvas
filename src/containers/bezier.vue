<template>
  <div class="bezier">

  </div>
</template>
<script>
export default {
  name: 'bezier',
  mounted () {
    this.drawBezier() // 实现模板A
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
      cxt.lineWidth = 6
      cxt.strokeStyle = '#333'
      cxt.beginPath()
      cxt.moveTo(30, 30)
      cxt.quadraticCurveTo()
    }
  }
}
</script>
