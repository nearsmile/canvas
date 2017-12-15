<template>
  <div class="template_one">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'template-one',
  mounted () {
    this.templateOne() // 实现模板A
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
    templateOne () {
      const cxt = this.initCanvas()
      const bg = new Image()
      bg.src = require('../assets/A01.png')
      bg.onload = () => {
        const pattern = cxt.createPattern(bg, 'no-repeat')
        cxt.fillStyle = pattern
        cxt.fillRect(0, 0, 750, 290)
      }
    }
  }
}
</script>
