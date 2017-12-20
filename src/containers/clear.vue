<template>
  <div class="clear">
    <canvas></canvas>
  </div>
</template>
<script>
  export default {
    name: 'clear',
    mounted () {
      const cxt = this.initCanvas()
      this.clear(cxt)
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
      clear (cxt) {
        cxt.fillStyle = 'red'
        cxt.fillRect(0, 0, 416, 736)

        cxt.clearRect(0, 0, 416, 736)
      }
    }
  }
</script>
