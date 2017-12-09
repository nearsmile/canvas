<template>
  <div class="line">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'line',
  mounted () {
    this.lineCap()
  },
  methods: {
    lineCap () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const cxt = canvas.getContext('2d')

      cxt.lineWidth = 10
      cxt.strokeStyle = '1baaaa'

      cxt.beginPath()
      cxt.moveTo(100, 100)
      cxt.lineTo(400, 100)
      // cxt.lineCap = 'butt'
      // cxt.lineCap = 'round'
      cxt.lineCap = 'square'
      cxt.stroke()
    }
  }
}
</script>
