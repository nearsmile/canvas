<template>
  <div class="shadow">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'shadow',
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
    alpha (cxt) {
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

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
    this.alpha(cxt)
  }
}
</script>
