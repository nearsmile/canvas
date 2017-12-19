<template>
  <div class="composite">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'composite',
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
    start (cxt) {
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // const cxt = this.initCanvas()
      // cxt.globalCompositeOperation = 'source-out'
      // cxt.globalCompositeOperation = 'source-in'
      // cxt.globalCompositeOperation = 'source-over'
      // cxt.globalCompositeOperation = 'source-atop'
      // cxt.globalCompositeOperation = 'destination-over'
      // cxt.globalCompositeOperation = 'destination-atop'
      // cxt.globalCompositeOperation = 'destination-in'
      // cxt.globalCompositeOperation = 'destination-out'
      cxt.globalCompositeOperation = 'lighter'
      // cxt.globalCompositeOperation = 'copy'
      // cxt.globalCompositeOperation = 'xor'
      cxt.globalAlpha = 0.5

      for (let i = 0; i <= 50; i++) {
        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)

        cxt.fillStyle = `rgb(${R}, ${G}, ${B})`

        cxt.beginPath()
        cxt.arc(Math.random() * scrollWidth, Math.random() * scrollHeight, Math.random() * 100, 0, Math.PI * 2)
        cxt.fill()
      }
    }
  },
  mounted () {
    const cxt = this.initCanvas()
    this.start(cxt)
  }
}
</script>
